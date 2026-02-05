import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormCard } from './student-form-card';

describe('StudentFormCard', () => {
  let component: StudentFormCard;
  let fixture: ComponentFixture<StudentFormCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFormCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
