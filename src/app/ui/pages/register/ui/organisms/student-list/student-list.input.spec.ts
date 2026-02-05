import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListInput } from './student-list.input';

describe('StudentListInput', () => {
  let component: StudentListInput;
  let fixture: ComponentFixture<StudentListInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentListInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
