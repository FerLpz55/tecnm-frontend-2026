import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LabeledValue } from '../../../core/utilities/labeled-value';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';

@Component({
  selector: 'hack-select',
  imports: [Icon, Button],
  templateUrl: './select.html',
  styleUrl: './select.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true,
    },
  ],
})
export class Select implements ControlValueAccessor, OnInit {
  @Input({ required: true }) public options!: LabeledValue<any>[];
  @Input() public default!: any;
  @Input() public showIcons = false;
  @Input() public removeDefault = false;
  public value: any;

  @HostBinding('style.--btn-display-icon') protected displayIcons: 'block' | 'none' = 'none';
  @HostBinding('style.--select-options-count') protected optionsCount!: number;
  @HostBinding('attr.state') protected state: 'folded' | 'unfolded' = 'folded';

  protected defaultAsOption!: LabeledValue<any>;
  protected selected!: LabeledValue<any>;
  protected sortedOptions!: LabeledValue<any>[];

  private readonly fallbackDefaultOption: Omit<LabeledValue<any>, 'icon'> = {
    value: 'none',
    label: 'Seleccionar',
  };

  private onChange = (value: any) => { };
  private onTouched = () => { };
  private isDisabled = false;

  writeValue(value: any): void {
    console.log({ value });
    this.selected = this.getOption(value);
    this.value = this.selected.value;
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

  ngOnInit() {
    console.log(this.default);
    this.defaultAsOption = this.getOption(this.default) || this.fallbackDefaultOption;
    console.log(this.defaultAsOption);
    this.selected = this.defaultAsOption;
    if (!this.removeDefault) this.options.push(this.defaultAsOption);
    this.sortOptions();
    this.optionsCount = this.options.length;
    this.displayIcons = this.showIcons ? 'block' : 'none';
  }

  protected onSelect(selection: any) {
    if (this.removeDefault && this.selected.value == this.default) {
      this.options = this.options.filter((o) => o.value != this.default);
      this.optionsCount--;
    }
    this.writeValue(selection);
    this.onChange(selection);
    this.onTouched();
    this.switchMode();
    this.sortOptions();
  }

  protected switchMode() {
    this.state = this.state === 'folded' ? 'unfolded' : 'folded';
  }

  private sortOptions() {
    this.sortedOptions = this.options.sort((a, b) => (a === this.selected ? -1 : 1));
  }

  private getOption(value: any) {
    return this.options.filter((option) => option.value == value)[0] || this.defaultAsOption;
  }
}
