import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfoForm } from './team-info-form';

describe('TeamInfoForm', () => {
  let component: TeamInfoForm;
  let fixture: ComponentFixture<TeamInfoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamInfoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamInfoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
