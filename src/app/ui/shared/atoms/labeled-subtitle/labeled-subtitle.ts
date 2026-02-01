import { Component, Input } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'hack-labeled-subtitle',
  imports: [Icon],
  templateUrl: './labeled-subtitle.html',
  styleUrl: './labeled-subtitle.css',
})
export class LabeledSubtitle {
  @Input() icon!: string;
}
