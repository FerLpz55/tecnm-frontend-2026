import { Component } from '@angular/core';
import { LabeledSubtitle } from '../../atoms/labeled-subtitle/labeled-subtitle';
import { Panel } from '../../atoms/panel/panel';
import { Intersectable } from '../../directives/intersectable/intersectable';
import { TeamInfoForm } from './ui/organisms/team-info-form/team-info-form';

@Component({
  selector: 'hack-register',
  imports: [Panel, LabeledSubtitle, TeamInfoForm, Intersectable],
  templateUrl: './register.page.html',
  styleUrl: './register.page.css',
})
export class RegisterPage { }
