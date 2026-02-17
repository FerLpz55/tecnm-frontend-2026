import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { EventBus } from '../../../core/events/event-bus/event-bus';
import { HomeIntersectionEvent } from '../../../core/events/home-intersection.event';
import { Button } from '../../atoms/button/button';
import { Text } from '../../atoms/text/text';
import { Intersectable } from '../../directives/intersectable/intersectable';

@Component({
  selector: 'hack-home',
  imports: [Text, Button, Intersectable],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage implements AfterViewInit, OnInit, OnDestroy {
  private readonly _eventBus = inject(EventBus);
  private readonly _ref: ElementRef<HTMLElement> = inject(ElementRef);
  private _intersectionObserver!: IntersectionObserver;
  private _countdownInterval!: ReturnType<typeof setInterval>;

  private static readonly TARGET_DATE = new Date('2026-03-05T08:00:00');

  protected readonly days = signal('00');
  protected readonly hours = signal('00');
  protected readonly minutes = signal('00');
  protected readonly seconds = signal('00');

  ngOnInit(): void {
    this.updateCountdown();
    this._countdownInterval = setInterval(() => this.updateCountdown(), 1000);
  }

  ngAfterViewInit(): void {
    this._intersectionObserver = new IntersectionObserver(
      (entries) => {
        const homeEntry = entries[0];
        const isIntersecting = homeEntry.isIntersecting;
        this._eventBus.emit(new HomeIntersectionEvent(isIntersecting));
      },
      { rootMargin: '-70% 0% 0% 0%' },
    );
    this._intersectionObserver.observe(this._ref.nativeElement);
  }

  ngOnDestroy(): void {
    this._intersectionObserver.disconnect();
    clearInterval(this._countdownInterval);
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const diff = HomePage.TARGET_DATE.getTime() - now;

    if (diff <= 0) {
      this.days.set('00');
      this.hours.set('00');
      this.minutes.set('00');
      this.seconds.set('00');
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    this.days.set(String(d).padStart(2, '0'));
    this.hours.set(String(h).padStart(2, '0'));
    this.minutes.set(String(m).padStart(2, '0'));
    this.seconds.set(String(s).padStart(2, '0'));
  }

  protected scrollToSection(selector: string): void {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
