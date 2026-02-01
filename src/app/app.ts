import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './ui/organisms/header/header';
import { Waves } from './ui/organisms/waves/waves';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Waves],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('LagunaHack-Frontend');
}
