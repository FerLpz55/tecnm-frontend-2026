import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'hack-text-input',
  templateUrl: './text-input.html',
  imports: [FormsModule],
  styleUrl: './text-input.css',

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInput),
      multi: true,
    },
  ],
})
export class TextInput implements ControlValueAccessor {
  @Output() Input = new EventEmitter<string>();
  @Output() Keydown = new EventEmitter<KeyboardEvent>();
  @Input() Type: 'text' | 'password' | 'number' = 'text';
  @Input() Placeholder: string = '';

  protected FocusSubject = new Subject<boolean>();
  public Focus$ = this.FocusSubject.asObservable();

  public Value = '';

  private OnChange: any;
  private OnTouched: any;
  private IsDisabled: boolean = false;

  registerOnChange(fn: any): void {
    this.OnChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.OnTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.IsDisabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.Value = obj;
  }

  protected onInput() {
    this.writeValue(this.Value);
    this.OnChange(this.Value);
    this.OnTouched();
    this.Input.emit(this.Value);
  }
}
