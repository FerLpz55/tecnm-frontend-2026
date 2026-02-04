import { Component, Input } from '@angular/core';
import { Project } from '../../../core/domain/model/project';
import { Bold } from '../../atoms/bold/bold';
import { Button } from '../../atoms/button/button';
import { Panel } from '../../atoms/panel/panel';
import { Text } from '../../atoms/text/text';
import { Title } from '../../atoms/title/title';
import { SemesterPipe } from '../../pipes/semester/semester-pipe';

@Component({
  selector: 'hack-project-card',
  imports: [Panel, Title, Bold, Button, Text, SemesterPipe],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input({ required: true }) Project!: Project;
}
