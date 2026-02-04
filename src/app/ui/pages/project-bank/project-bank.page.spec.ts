import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBankPage } from './project-bank.page';

describe('ProjectBankPage', () => {
  let component: ProjectBankPage;
  let fixture: ComponentFixture<ProjectBankPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBankPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
