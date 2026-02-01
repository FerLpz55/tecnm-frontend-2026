import { Component, Input } from '@angular/core';
import { Icon } from '../icon/icon';
import { Text } from '../text/text';

@Component({
  selector: 'hack-labeled-text',
  imports: [Icon, Text],
  templateUrl: './labeled-text.html',
  styleUrl: './labeled-text.css',
})
export class LabeledText {
  @Input() icon!: string;
}
