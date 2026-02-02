import { Component } from '@angular/core';
import { Button } from '../../atoms/button/button';
import { Icon } from '../../atoms/icon/icon';
import { Subtitle } from '../../atoms/subtitle/subtitle';
import { Text } from '../../atoms/text/text';
import { Title } from '../../atoms/title/title';
import { Intersectable } from '../../directives/intersectable/intersectable';

@Component({
  selector: 'hack-convocation',
  imports: [Title, Text, Button, Icon, Subtitle, Intersectable],
  templateUrl: './convocation.page.html',
  styleUrl: './convocation.page.css',
})
export class ConvocationPage { }
