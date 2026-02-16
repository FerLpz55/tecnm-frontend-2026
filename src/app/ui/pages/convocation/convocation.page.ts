import { Component } from '@angular/core';
import { Text } from '../../atoms/text/text';
import { Title } from '../../atoms/title/title';
import { Intersectable } from '../../directives/intersectable/intersectable';

@Component({
  selector: 'hack-convocation',
  imports: [Title, Text, Intersectable],
  templateUrl: './convocation.page.html',
  styleUrl: './convocation.page.css',
})
export class ConvocationPage { }
