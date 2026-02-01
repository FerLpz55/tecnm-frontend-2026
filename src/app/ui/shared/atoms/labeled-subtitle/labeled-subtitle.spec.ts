import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LabeledSubtitle} from './labeled-subtitle';

describe('LabeledTitle', () => {
  let component: LabeledSubtitle;
  let fixture: ComponentFixture<LabeledSubtitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabeledSubtitle]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LabeledSubtitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
