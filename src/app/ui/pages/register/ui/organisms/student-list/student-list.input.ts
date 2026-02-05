import { ChangeDetectorRef, Component, forwardRef, inject, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Student } from '../../../../../../core/domain/model/student';
import { Button } from '../../../../../atoms/button/button';
import { Gallery } from '../../../../../atoms/gallery/gallery';
import { StudentFormCard } from '../../molecules/student-form-card/student-form-card';

@Component({
  selector: 'hack-student-list',
  imports: [Gallery, StudentFormCard, Button],
  templateUrl: './student-list.input.html',
  styleUrl: './student-list.input.css',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StudentListInput), multi: true },
  ],
})
export class StudentListInput implements ControlValueAccessor {
  @ViewChild(Gallery) protected _gallery!: Gallery;

  protected readonly _students = new Set<Student>();

  private readonly _cdr = inject(ChangeDetectorRef);

  private onChange: any;
  private onTouched: any;
  private isDisabled: boolean = false;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(obj: Set<Student>): void {
    this._students.clear();
    for (const student of obj) {
      this._students.add(student);
    }
  }

  protected AddNewStudent() {
    this._students.add(new Student('', -1, ''));
    this.onChange(this._students);
    this._cdr.detectChanges();
    this._gallery.refresh();
    this._gallery.goLast();
  }

  protected get StudentList() {
    return Array.from(this._students.values());
  }
}
