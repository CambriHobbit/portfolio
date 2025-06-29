import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import Project from '../../models/projet.model';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  private readonly projects: WritableSignal<Project[]> = signal([
    {
      id: 4,
      title: 'Alternance: Modernisation et uniformisation des applications internes',
      description:
        'Migration des différrentes applications internes en utilisant les outils GEODIS. Le but était de remplacer le framework Bootstrap par une librairie GEODIS.',
      imageUrl: 'geodis.png',
      technologies: [
        { logo: 'angular.svg', name: 'Angular' },
        { logo: 'typescript.png', name: 'TypeScript' },
        { logo: 'html-5.png', name: 'HTML' },
        { logo: 'css-3.png', name: 'CSS' },
        { logo: 'nodejs.png', name: 'Node.js' },
      ],
      featured: false,
      competencesTechniques: [
        'Développement d\'IHM',
        'Tests unitaires',
        'Tests d\'intégrations'
      ],
      competencesTransverses: [
        'Organisation',
        'Autonomie',
        'Communication',
      ],
      date: 'Août 2024 - Août 2025',
      company: 'GEODIS ERN',
    },
    {
      id: 3,
      title: 'Stage : Modernisation d\'une application ',
      description:
        'Refonte d\'une application contenant des informations pour les développeurs de GEODIS ASSC. Le but de ce projet était de moderniser l\'application en utilisant Angular et Node.js pour améliorer l\'expérience utilisateur et la performance.',
      imageUrl: 'geodis.png',
      technologies: [
        { logo: 'angular.svg', name: 'Angular' },
        { logo: 'typescript.png', name: 'TypeScript' },
        { logo: 'html-5.png', name: 'HTML' },
        { logo: 'css-3.png', name: 'CSS' },
        { logo: 'nodejs.png', name: 'Node.js' },
      ],
      featured: false,
      competencesTechniques: [
        'Création d\'application Angular',
        'Conception d\'IHM',
        'Patron de conception Smart-Dumb',
      ],
      competencesTransverses: [
        'Organisation',
        'Résolution de problèmes'
      ],
      date: 'Avril 2024 - Juin 2024',
      company: 'GEODIS ERN',
    },
    {
      id: 2,
      title: 'Game Jam',
      description: 'Création d’un jeu vidéo en 7 jours en équipe de 7. Le thème était "Les nations s\'affrontent pacifiquement". Les contraintes étaient d\'utiliser Python et Pygame pour faire un jeu en réseaux. Nous avons décidé de faire un jeu de combat sur plateforme.',
      imageUrl: 'gamejam.png',
      technologies: [
        { logo: 'python.png', name: 'Python' },
      ],
      featured: false,
      competencesTechniques: [
        'Développement d\'un client',
        'Développement d\'un serveur',
        'Programmation réseau'
      ],
      competencesTransverses: [
        'Gestion du temps',
        'Organisation',
        'Collaboration',
        'Créativité',
      ],
      date: 'Septembre 2024',
      company: 'IUT2 Grenoble',
      sourceUrl: 'https://github.com/ockapy/Game-Jam2'
    },
    {
      id: 1,
      title: 'Pokédex',
      description:
        'Le but de ce projet était de se familiariser avec les appels API en JavaScript et une page web avec les données récupérers. Pour ce projet universitaire en binôme, nous avons choisi de créer un Pokédex en utilisant l’API PokéAPI.',
      imageUrl: 'pokedex.png',
      technologies: [
        { logo: 'javascript.svg', name: 'JavaScript' },
        { logo: 'html-5.png', name: 'HTML' },
        { logo: 'css-3.png', name: 'CSS' },
      ],
      liveUrl: 'https://clooooud.github.io/pokedex/',
      sourceUrl: 'https://github.com/Clooooud/pokedex',
      featured: true,
      competencesTechniques: [
        'Intégration API',
      ],
      competencesTransverses: [
        'Gestion de projet',
        'Communication',
        'Résolution de problèmes',
      ],
      date: 'Janvier 2023',
      company: 'IUT2 Grenoble',
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

  getProjectsSlice(end: number): Project[] {
    return this.projects().slice(0, end);
  }

}
