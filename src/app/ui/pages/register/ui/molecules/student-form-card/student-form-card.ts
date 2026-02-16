import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../../../../core/domain/model/student';
import { LabeledText } from '../../../../../atoms/labeled-text/labeled-text';
import { Panel } from '../../../../../atoms/panel/panel';
import { TextInput } from '../../../../../atoms/text-input/text-input';
import { InputLabel } from '../../../../../molecules/input-label/input-label';
import { Button } from '../../../../../atoms/button/button';

@Component({
  selector: 'hack-student-form-card',
  imports: [Panel, LabeledText, InputLabel, TextInput, FormsModule, Button],
  templateUrl: './student-form-card.html',
  styleUrl: './student-form-card.css',
})
export class StudentFormCard {
  @Input({ required: true }) Student!: Student;
  @Output() Change = new EventEmitter<Student>();
  @Output() Remove = new EventEmitter<Student>();
}
