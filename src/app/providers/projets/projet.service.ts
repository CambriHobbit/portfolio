import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import Project from '../../models/projet.model';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  private readonly projects: WritableSignal<Project[]> = signal([
    {
      id: 1,
      title: 'Plateforme E-commerce',
      description:
        'Une plateforme e-commerce complète avec panier et paiement en ligne',
      imageUrl: 'assets/projects/ecommerce.jpg',
      technologies: [
        { logo: 'assets/logos/angular.png', name: 'Angular' },
        { logo: 'assets/logos/nodejs.png', name: 'Node.js' },
        { logo: 'assets/logos/mongodb.png', name: 'MongoDB' },
      ],
      liveUrl: 'https://ecommerce-example.com',
      sourceUrl: 'https://github.com/user/ecommerce',
      featured: true,
    },
    {
      id: 2,
      title: 'Application de gestion de tâches',
      description: 'Application permettant de gérer ses tâches quotidiennes',
      imageUrl: 'assets/projects/taskmanager.jpg',
      technologies: [
        { logo: 'assets/logos/angular.png', name: 'Angular' },
        { logo: 'assets/logos/firebase.png', name: 'Firebase' },
      ],
      liveUrl: 'https://todo-app-example.com',
      sourceUrl: 'https://github.com/user/todo-app',
      featured: false,
    },
    {
      id: 3,
      title: 'Dashboard Analytique',
      description:
        'Dashboard de visualisation de données avec graphiques interactifs',
      imageUrl: 'assets/projects/analytics.jpg',
      technologies: [
        { logo: 'assets/logos/angular.png', name: 'Angular' },
        { logo: 'assets/logos/d3.png', name: 'D3.js' },
        { logo: 'assets/logos/express.png', name: 'Express' },
      ],
      sourceUrl: 'https://github.com/user/analytics-dashboard',
      featured: true,
    },
    {
      id: 4,
      title: 'Application de réservation',
      description: 'Système de réservation en ligne pour restaurants et cafés',
      imageUrl: 'assets/projects/booking.jpg',
      technologies: [
        { logo: 'assets/logos/angular.png', name: 'Angular' },
        { logo: 'assets/logos/spring.png', name: 'Spring Boot' },
        { logo: 'assets/logos/postgresql.png', name: 'PostgreSQL' },
      ],
      liveUrl: 'https://booking-example.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Interactif',
      description:
        'Portfolio professionnel avec animations et transitions fluides',
      imageUrl: 'assets/projects/portfolio.jpg',
      technologies: [
        { logo: 'assets/logos/angular.png', name: 'Angular' },
        { logo: 'assets/logos/gsap.png', name: 'GSAP' },
      ],
      liveUrl: 'https://portfolio-example.com',
      sourceUrl: 'https://github.com/user/portfolio',
      featured: true,
    },
  ]);

  constructor() {}

  getProjects(): Signal<Project[]> {
    return this.projects.asReadonly();
  }

  getProjectById(id: number): Project | undefined {
    return this.projects().find((p) => p.id === id);
  }
}
