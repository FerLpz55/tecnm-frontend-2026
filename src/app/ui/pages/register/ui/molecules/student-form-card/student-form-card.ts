import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../../../../core/domain/model/student';
import { IconedLabeledValue } from '../../../../../../core/utilities/labeled-value';
import { LabeledText } from '../../../../../atoms/labeled-text/labeled-text';
import { Panel } from '../../../../../atoms/panel/panel';
import { Select } from '../../../../../atoms/select/select';
import { TextInput } from '../../../../../atoms/text-input/text-input';
import { InputLabel } from '../../../../../molecules/input-label/input-label';

@Component({
  selector: 'hack-student-form-card',
  imports: [Panel, LabeledText, InputLabel, Select, TextInput, FormsModule],
  templateUrl: './student-form-card.html',
  styleUrl: './student-form-card.css',
})
export class StudentFormCard {
  @Input({ required: true }) Student!: Student;
  @Output() Change = new EventEmitter<Student>();

  protected readonly _semesterOptions: IconedLabeledValue<number, 'student-hat'>[] = [
    { icon: 'student-hat', label: 'Semestre', value: -1 },
    { icon: 'student-hat', label: 'Segundo', value: 2 },
    { icon: 'student-hat', label: 'Cuarto', value: 4 },
    { icon: 'student-hat', label: 'Sexto', value: 6 },
    { icon: 'student-hat', label: 'Octavo', value: 8 },
  ];
}
