import { Component } from '@angular/core';
import { Button } from '../../atoms/button/button';
import { LabeledSubtitle } from '../../atoms/labeled-subtitle/labeled-subtitle';
import { Panel } from '../../atoms/panel/panel';
import { Text } from '../../atoms/text/text';
import { Title } from '../../atoms/title/title';
import { TeamInfoForm } from './ui/organisms/team-info-form/team-info-form';

@Component({
  selector: 'hack-register',
  imports: [Title, Text, Button, Panel, LabeledSubtitle, TeamInfoForm],
  templateUrl: './register.page.html',
  styleUrl: './register.page.css',
})
export class RegisterPage { }
