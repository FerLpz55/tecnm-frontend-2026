import {
  ChangeDetectorRef,
  Component,
  forwardRef,
  inject,
  ViewChild
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  AbstractControl,
  ValidationErrors,
  Validator
} from '@angular/forms';

import { Student } from '../../../../../../core/domain/model/student';

import { Button } from '../../../../../atoms/button/button';
import { Gallery } from '../../../../../atoms/gallery/gallery';
import { StudentFormCard } from '../../molecules/student-form-card/student-form-card';


@Component({
  selector: 'hack-student-list',
  standalone: true,

  imports: [
    Gallery,
    StudentFormCard,
    Button
  ],

  templateUrl: './student-list.input.html',
  styleUrl: './student-list.input.css',

  providers: [

    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StudentListInput),
      multi: true
    },

    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => StudentListInput),
      multi: true
    }

  ],
})
export class StudentListInput
  implements ControlValueAccessor, Validator {


  @ViewChild(Gallery)
  protected _gallery!: Gallery;


  protected readonly _students = new Set<Student>();

  private readonly _cdr = inject(ChangeDetectorRef);


  private onChange: any = () => {};
  private onTouched: any = () => {};

  private isDisabled = false;



  // ===============================
  // CONTROL VALUE ACCESSOR
  // ===============================

  writeValue(obj: Set<Student>): void {

    this._students.clear();

    if (obj) {
      for (const student of obj) {
        this._students.add(student);
      }
    }

    this._cdr.detectChanges();
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }


  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }



  // ===============================
  // VALIDACIÓN
  // ===============================

  validate(control: AbstractControl): ValidationErrors | null {

    const size = this._students.size;

    // Debe haber entre 3 y 5 integrantes
    if (size < 3 || size > 5) {
      return { membersCount: true };
    }

    // Cada integrante debe tener nombre y correo
    for (const student of this._students) {
      if (!student.Name?.trim() || !student.InstitutionalEmail?.trim()) {
        return { incompleteStudents: true };
      }
    }

    // No puede haber correos duplicados
    const emails = Array.from(this._students).map(s => s.InstitutionalEmail.trim().toLowerCase());
    if (new Set(emails).size !== emails.length) {
      return { duplicateEmails: true };
    }

    return null;
  }



  // ===============================
  // ACCIONES UI
  // ===============================

  protected AddNewStudent(): void {

    // Máximo 5
    if (this._students.size >= 5) return;

    this._students.add(new Student('', ''));

    this.onChange(this._students);
    this.onTouched();

    this._cdr.detectChanges();

    this._gallery.refresh();
    this._gallery.goLast();
  }


  protected RemoveStudent(student: Student): void {

    // Mínimo 1 estudiante para poder editar
    if (this._students.size <= 1) return;

    this._students.delete(student);

    this.onChange(this._students);
    this.onTouched();

    this._cdr.detectChanges();

    // Actualizar la galería después de eliminar
    if (this._gallery) {
      setTimeout(() => {
        this._gallery.refresh();
      }, 100);
    }
  }


  protected get StudentList() {
    return Array.from(this._students.values());
  }

}
