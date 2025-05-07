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
      imageUrl: 'placeholder.png',
      technologies: [
        { logo: 'angular.svg', name: 'Angular' },
        { logo: 'nodejs.png', name: 'Node.js' },
      ],
      liveUrl: 'https://ecommerce-example.com',
      sourceUrl: 'https://github.com/user/ecommerce',
      featured: true,
    },
    {
      id: 2,
      title: 'Application de gestion de tâches',
      description: 'Application permettant de gérer ses tâches quotidiennes',
      imageUrl: 'placeholder.png',
      technologies: [
        { logo: 'angular.svg', name: 'Angular' },
        { logo: 'nodejs.png', name: 'Node.js' },
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
      imageUrl: 'placeholder.png',
      technologies: [
        { logo: 'angular.svg', name: 'Angular' },
        { logo: 'nodejs.png', name: 'Node.js' },
      ],
      sourceUrl: 'https://github.com/user/analytics-dashboard',
      featured: true,
    },
    {
      id: 4,
      title: 'Application de réservation',
      description: 'Système de réservation en ligne pour restaurants et cafés',
      imageUrl: 'placeholder.png',
      technologies: [
        { logo: 'angular.svg', name: 'Angular' },
        { logo: 'nodejs.png', name: 'Node.js' },
      ],
      liveUrl: 'https://booking-example.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Interactif',
      description:
        'Portfolio professionnel avec animations et transitions fluides',
      imageUrl: 'placeholder.png',
      technologies: [
        { logo: 'angular.svg', name: 'Angular' },
        { logo: 'nodejs.png', name: 'Node.js' },
      ],
      liveUrl: 'https://portfolio-example.com',
      sourceUrl: 'https://github.com/user/portfolio',
      featured: true,
    },
  ]);

  private readonly allProjects: WritableSignal<Project[]> = signal([...this.projects()]);

  constructor() {}

  getProjects(): Signal<Project[]> {
    return this.allProjects.asReadonly();
  }

  getAllTech(): string[] {
    let allTech: Set<string> = new Set();
    this.projects().forEach((project: Project) => {
      project.technologies.forEach((tech) => {
        allTech.add(tech.name);
      });
    });
    return Array.from(allTech);
  }

  searchProject(projectName: string): void {
    this.allProjects.set(
      this.projects().filter((proj: Project) => {
        const res = proj.title
          .toLowerCase()
          .includes(projectName.toLowerCase());
        if (res) return true;
        else return false;
      })
    );
  }

  filterByTech(technologies: string): void {
    this.allProjects.update((prevProjects) =>
      prevProjects.filter((proj: Project) =>
        proj.technologies.some((tech) =>
          tech.name.toLowerCase().includes(technologies.toLowerCase())
        )
      )
    );
  }

  getProjectById(id: string): Project | undefined {
    return this.projects().find((proj) => proj.title === id);
  }

}
