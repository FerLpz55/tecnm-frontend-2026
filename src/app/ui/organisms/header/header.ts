import { Component } from '@angular/core';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'hack-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header { }
