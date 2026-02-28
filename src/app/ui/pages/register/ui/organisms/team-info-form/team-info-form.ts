import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Campus } from '../../../../../../core/domain/model/campus';
import { Student } from '../../../../../../core/domain/model/student';
import { Team } from '../../../../../../core/domain/model/team';
import { IconedLabeledValue } from '../../../../../../core/utilities/labeled-value';
import { SupabaseService } from '../../../../../../core/services/supabase.service';
import { TeamRegistration } from '../../../../../../core/interfaces/team-registration.interface';

import { Button } from '../../../../../atoms/button/button';
import { LabeledText } from '../../../../../atoms/labeled-text/labeled-text';
import { Select } from '../../../../../atoms/select/select';
import { TextInput } from '../../../../../atoms/text-input/text-input';
import { InputLabel } from '../../../../../molecules/input-label/input-label';
import { StudentListInput } from '../student-list/student-list.input';

@Component({
  selector: 'hack-team-info-form',
  standalone: true,
  imports: [
    InputLabel,
    TextInput,
    Select,
    LabeledText,
    FormsModule,
    StudentListInput,
    ReactiveFormsModule,
    Button,
  ],
  templateUrl: './team-info-form.html',
  styleUrl: './team-info-form.css',
})
export class TeamInfoForm implements OnInit {

  private readonly _supabaseService = inject(SupabaseService);
  protected isSubmitting = false;

  // ===============================
  // FORMULARIO REACTIVO
  // ===============================

  protected readonly _form = new FormGroup({

    Name: new FormControl<string | null>(
      null,
      [Validators.required, Validators.minLength(3)]
    ),

    Campus: new FormControl<Campus | null>(
      null,
      [Validators.required]
    ),

    Members: new FormControl<Set<Student>>(
      new Set<Student>(),
      [Validators.required]
    ),

  });


  // ===============================
  // INIT
  // ===============================

  ngOnInit(): void {

    // Iniciar con 1 integrante vacío
    this._form.patchValue({
      Members: new Set<Student>([
        new Student('', '')
      ]),
    });

  }


  // ===============================
  // MODELO DOMINIO
  // ===============================

  protected _team = new Team();


  // ===============================
  // OPCIONES CAMPUS
  // ===============================

  protected readonly _campusOptions: IconedLabeledValue<Campus, 'institution'>[] = [

    { icon: 'institution', label: 'Zongolica', value: Campus.ZONGOLICA },

    { icon: 'institution', label: 'Nogales', value: Campus.NOGALES },

    { icon: 'institution', label: 'Cuichapa', value: Campus.CUICHAPA },

    { icon: 'institution', label: 'Tequila', value: Campus.TEQUILA },

    { icon: 'institution', label: 'Tehuipango', value: Campus.TEHUIPANGO },

  ];


  // ===============================
  // SUBMIT
  // ===============================

  protected async onSubmit(): Promise<void> {

    if (this.isSubmitting) return;

    this._form.controls.Members.updateValueAndValidity();

    if (this._form.invalid) {
      const errors = this._form.controls.Members.errors;
      if (errors?.['membersCount']) {
        alert('El equipo debe tener entre 3 y 5 integrantes');
      } else if (errors?.['incompleteStudents']) {
        alert('Todos los integrantes deben tener nombre y correo');
      } else if (errors?.['duplicateEmails']) {
        alert('Hay correos repetidos entre los integrantes');
      } else {
        alert('Por favor completa todos los campos correctamente');
      }
      this._form.markAllAsTouched();
      return;
    }

    const data = this._form.value;

    if (!data.Name || !data.Campus || !data.Members) {
      alert('Datos incompletos');
      return;
    }

    // Validar cantidad de integrantes
    const membersArray = Array.from((data.Members as Set<Student>).values());

    if (membersArray.length < 3 || membersArray.length > 5) {
      alert('El equipo debe tener entre 3 y 5 integrantes');
      return;
    }

    // Mapear campus a string
    const campusMap: Record<Campus, string> = {
      [Campus.ZONGOLICA]: 'Zongolica',
      [Campus.NOGALES]: 'Nogales',
      [Campus.CUICHAPA]: 'Cuichapa',
      [Campus.TEQUILA]: 'Tequila',
      [Campus.TEHUIPANGO]: 'Tehuipango'
    };

    // Preparar datos para Supabase
    const registration: TeamRegistration = {
      teamName: data.Name,
      campus: campusMap[data.Campus as Campus],
      students: membersArray.map((student: Student) => ({
        fullName: student.Name,
        email: student.InstitutionalEmail,
        studentId: ''
      }))
    };

    // Enviar a Supabase
    this.isSubmitting = true;

    const result = await this._supabaseService.registerTeam(registration);

    this.isSubmitting = false;

    if (result.success) {
      alert(result.message);
      this._form.reset();
      this.ngOnInit(); // Reiniciar formulario
    } else {
      alert(result.message);
    }

  }

}
