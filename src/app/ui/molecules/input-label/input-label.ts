import { Component, Input } from '@angular/core';
import { LabeledText } from '../../atoms/labeled-text/labeled-text';

@Component({
  selector: 'hack-input-label',
  imports: [LabeledText],
  templateUrl: './input-label.html',
  styleUrl: './input-label.css',
})
export class InputLabel {
  @Input({ required: true }) icon!: string;
}
