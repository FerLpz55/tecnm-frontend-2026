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

    // Ruta absoluta desde la raíz para servir assets correctamente
    const path = this.src
      ? this.src
      : `/icons/${this.icon}.svg`;

    try {
      const response = await fetch(path);
      this.svg = await response.text();
    } catch (error) {
      console.error('Error loading icon:', path);
      this.svg = '';
    }
  }
}
