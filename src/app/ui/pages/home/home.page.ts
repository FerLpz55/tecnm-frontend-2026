import { Component } from '@angular/core';
import { Button } from '../../atoms/button/button';
import { Text } from '../../atoms/text/text';

@Component({
  selector: 'hack-home',
  imports: [Text, Button],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage { }
