import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputLabel} from './input-label';

describe('InputLabel', () => {
  let component: InputLabel;
  let fixture: ComponentFixture<InputLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputLabel]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
