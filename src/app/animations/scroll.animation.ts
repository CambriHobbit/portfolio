import { trigger, transition, style, animate } from '@angular/animations';

export const scrollAnimation = trigger('scrollAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
