import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bold } from '../bold/bold';
import { Icon } from '../icon/icon';

@Component({
  selector: 'hack-button',
  standalone: true,
  imports: [CommonModule, Icon, Bold],
  templateUrl: './button.html',
  styleUrls: ['./button.css', '../../styles/button.shared.css'],
})
export class Button {

  @Input() icon!: string;

  @Input() type: 'submit' | 'reset' | 'button' = 'button';

  @Input() disabled: boolean | null = false;

  @Input() href?: string;

  @Input() target?: string;

  @Input() download?: boolean | string;

  @Input()
  @HostBinding('attr.mode')
  mode: 'clear' | 'dark' | 'outlined' | 'transparent' = 'clear';

  @Output() Click = new EventEmitter<void>();

  public isFocused = false;

  protected get isLink(): boolean {
    return !!this.href;
  }

}
