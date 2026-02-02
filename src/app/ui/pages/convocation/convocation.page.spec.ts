import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocationPage } from './convocation.page';

describe('ConvocationPage', () => {
  let component: ConvocationPage;
  let fixture: ComponentFixture<ConvocationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvocationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
