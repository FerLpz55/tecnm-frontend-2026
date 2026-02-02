import { Injectable } from '@angular/core';
import { filter, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventBus {
  private readonly eventSubject = new Subject();

  public on<T>(eventType: new (...args: any[]) => T) {
    return this.eventSubject.pipe(filter((event): event is T => event instanceof eventType));
  }

  public emit(event: any) {
    console.log(event);
    this.eventSubject.next(event);
  }
}
