import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[hackIntersectable]',
})
export class Intersectable implements AfterViewInit, OnDestroy {
  private _intersectionObserver!: IntersectionObserver;
  private readonly _ref: ElementRef<HTMLElement> = inject(ElementRef);
  @Input()
  Opts?: IntersectionObserverInit;

  @Input()
  BottomMargin!: string;
  @Input()
  TopMargin!: string;

  @HostBinding('class.intersected')
  protected _isIntersecting = false;

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    this._intersectionObserver = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        this._isIntersecting = isIntersecting;
        console.log(isIntersecting);
      },
      {
        rootMargin: `${this.TopMargin || '-70%'} 0% ${this.BottomMargin || '0%'} 0%`,
        ...this.Opts,
      },
    );
    this._intersectionObserver.observe(this._ref.nativeElement);
  }

  ngOnDestroy(): void {
    this._intersectionObserver.disconnect();
  }
}
