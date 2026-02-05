import { Component, Input } from '@angular/core';
import { Icon } from '../icon/icon';
import { Subtitle } from '../subtitle/subtitle';

@Component({
  selector: 'hack-labeled-subtitle',
  imports: [Icon, Subtitle],
  templateUrl: './labeled-subtitle.html',
  styleUrl: './labeled-subtitle.css',
})
export class LabeledSubtitle {
  @Input() icon!: string;
}
