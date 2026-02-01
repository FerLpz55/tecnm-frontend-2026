import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Bold } from '../bold/bold';
import { Icon } from '../icon/icon';
import { Text } from '../text/text';

@Component({
  selector: 'hack-button',
  imports: [Icon, Text, Bold],
  templateUrl: './button.html',
  styleUrls: ['./button.css', '../../../styles/button.shared.css'],
})
export class Button {
  @Input() icon!: string;
  @Input() type: 'submit' | 'reset' | 'button' = 'button';
  @Input() disabled: boolean | null = false;
  @Input() @HostBinding('attr.mode') mode: 'clear' | 'dark' | 'outlined' = 'clear';
  @Output() onclick = new EventEmitter<void>();
  public isFocused = false;
}
