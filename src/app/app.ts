import { Component, signal } from '@angular/core';
import { Header } from './ui/organisms/header/header';
import { Waves } from './ui/organisms/waves/waves';
import { ConvocationPage } from './ui/pages/convocation/convocation.page';
import { HomePage } from './ui/pages/home/home.page';
import { RegisterPage } from './ui/pages/register/register.page';
import { ItineraryPage } from './ui/pages/itinerary/itinerary.page';
import { CommitteePage } from './ui/pages/committee/committee.page';

@Component({
  selector: 'app-root',
  imports: [Header, Waves, HomePage, ConvocationPage, RegisterPage, ItineraryPage, CommitteePage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('LagunaHack-Frontend');
}
