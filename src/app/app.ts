import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './ui/organisms/header/header';
import { Waves } from './ui/organisms/waves/waves';
import { HomePage } from './ui/pages/home/home.page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Waves, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('LagunaHack-Frontend');
}
