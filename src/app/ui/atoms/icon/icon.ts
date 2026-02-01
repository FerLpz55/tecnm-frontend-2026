import { Component, Input, OnChanges } from '@angular/core';
import { SafeHtmlPipe } from '../../pipes/safe-html/safe-html-pipe';

@Component({
  selector: 'hack-icon',
  imports: [SafeHtmlPipe],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon implements OnChanges {
  @Input() icon!: string;
  @Input() src!: string;

  protected svg = '';

  ngOnChanges() {
    this.loadIcon();
  }

  private async loadIcon() {
    if (!this.icon && !this.src) return;
    let src = this.src ? this.src : `/icons/${this.icon}.svg`;
    try {
      let data = await fetch(src);
      this.svg = await data.text();
    } catch (error) {
      console.error(error);
      this.svg = 'x';
    }
  }
}
