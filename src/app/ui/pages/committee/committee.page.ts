import { Component } from '@angular/core';
import { Text } from '../../atoms/text/text';
import { Title } from '../../atoms/title/title';
import { LabeledText } from '../../atoms/labeled-text/labeled-text';
import { Intersectable } from '../../directives/intersectable/intersectable';

@Component({
  selector: 'hack-committee',
  imports: [Title, Text, LabeledText, Intersectable],
  templateUrl: './committee.page.html',
  styleUrl: './committee.page.css',
})
export class CommitteePage { }
