import { Component, inject, OnInit } from '@angular/core';
import { EventBus } from '../../../core/events/event-bus/event-bus';
import { HomeIntersectionEvent } from '../../../core/events/home-intersection.event';

@Component({
  selector: 'hack-waves',
  imports: [],
  templateUrl: './waves.html',
  styleUrl: './waves.css',
})
export class Waves implements OnInit {
  private readonly _eventBus = inject(EventBus);
  protected _height = '100vh';
  protected _position = 'absolute';
  private readonly _MAX_HEIGHT = '100vh';
  private readonly _MIN_HEIGHT = '10rem';

  ngOnInit(): void {
    this._eventBus.on(HomeIntersectionEvent).subscribe(({ IsIntersecting }) => {
      this._height = IsIntersecting ? this._MAX_HEIGHT : this._MIN_HEIGHT;
      this._position = IsIntersecting ? 'absolute' : 'sticky';
    });
  }
}
