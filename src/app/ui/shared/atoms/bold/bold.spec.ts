import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bold } from './bold';

describe('Bold', () => {
  let component: Bold;
  let fixture: ComponentFixture<Bold>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bold]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bold);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
