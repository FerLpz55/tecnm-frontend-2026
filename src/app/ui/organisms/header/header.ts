import { Component } from '@angular/core';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'hack-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  protected scrollToSection(sectionId: string): void {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerOffset = 92; // Altura del header (5.75rem ≈ 92px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

}
