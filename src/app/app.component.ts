import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { fadeAnimation } from './animations/route.animation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    fadeAnimation,
    trigger('navbarAnimation', [
      state(
        'open',
        style({
          height: '180px',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
        })
      ),
      transition('closed => open', [animate('0.5s ease')]),
      transition('open => closed', [animate('0.5s ease')]),
    ]),
    trigger('linkAnimation', [
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(-20px)',
        })
      ),
      transition('hidden => visible', [animate('0.3s ease')]),
      transition('visible => hidden', [animate('0.3s ease')]),
    ]),
    trigger('burgerAnimation', [
      state(
        'open',
        style({
          // Les styles sont appliqués dans le CSS
        })
      ),
      state(
        'closed',
        style({
          // Les styles sont appliqués dans le CSS
        })
      ),
      transition('closed <=> open', [animate('0.3s ease')]),
    ]),
  ],
})
export class AppComponent {
  isNavOpen = false;
  isMobileView = false;

  // Providers
  private readonly router = inject(Router);

  constructor() {
    // Vérifier la taille de l'écran au chargement
    this.checkScreenSize();

    // Écouter les changements de taille d'écran
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize(): void {
    this.isMobileView = window.innerWidth <= 600;
  }

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav(path: string): void {
    console.log('Navigating to:', path);

    this.router.navigate([path]);

    this.isNavOpen = false;
  }
}
