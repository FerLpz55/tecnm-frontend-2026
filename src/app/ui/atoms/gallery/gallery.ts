import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnDestroy,
} from '@angular/core';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'hack-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements AfterViewInit, OnDestroy {
  @Input() options: SwiperOptions = {};

  private readonly cdr = inject(ChangeDetectorRef);

  private swiper!: Swiper;
  private static idCounter = 0;
  protected readonly id = `swiper-gallery-${Gallery.idCounter++}`;

  ngAfterViewInit() {
    this.swiper = new Swiper(`#${this.id}`, {
      modules: [Pagination],
      pagination: {
        el: `.swiper-pagination`,
        clickable: true,
      },
      direction: 'horizontal',
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      },
      ...this.options,
    });

    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.swiper.destroy(true, true);
  }

  public goNext() {
    this.swiper.slideNext();
  }

  public goPrev() {
    this.swiper.slidePrev();
  }

  public hasPrev() {
    return this.swiper && this.swiper.activeIndex !== 0;
  }

  public hasNext() {
    return this.swiper && this.swiper?.activeIndex !== this.swiper?.slides.length - 1;
  }

  public goLast() {
    this.swiper.slideTo(this.swiper.slides.length - 1);
  }

  public goTo(index: number) {
    this.swiper.slideTo(index);
  }

  public afterSlideChange(callback: (swiper: Swiper) => void) {
    this.swiper.on('slideChange', callback);
    this.swiper.on('afterInit', callback);
  }

  public manualInit() {
    this.swiper.init();
  }

  public refresh() {
    this.swiper.update();
  }
}
