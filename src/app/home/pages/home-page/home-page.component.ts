import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import Project from '../../../models/projet.model';
import { Router } from '@angular/router';
import { ProjetService } from '../../../providers/projets/projet.service';

@Component({
  selector: 'app-home-page',
  imports: [NgOptimizedImage],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  public nom: string = 'Mussio Gabin';
  public description: string =
    "Je suis étudiant en BUT Informatique à l'IUT2 de Grenoble, passionné par le développement web et les technologies modernes. Je suis à la recherche de défis et d'opportunités pour apprendre et developper mes compétences dans le domaine de l'informatique.";

  public linkLinkedIn: string =
    'https://www.linkedin.com/in/gabin-mussio-2b652b369/';
  public competences: Array<{
    categorie: string;
    liste: Array<{ nom: string; logo: string }>;
  }> = [
    {
      categorie: 'Langages de programmation',
      liste: [
        { nom: 'JavaScript', logo: 'javascript.svg' },
        { nom: 'TypeScript', logo: 'typescript.png' },
        { nom: 'HTML', logo: 'html-5.png' },
        { nom: 'CSS', logo: 'css-3.png' },
        { nom: 'SQL', logo: 'sql.png' },
      ],
    },
    {
      categorie: 'Frameworks & Bibliothèques',
      liste: [
        { nom: 'Angular', logo: 'angular.svg' },
        { nom: 'Node.js', logo: 'nodejs.png' },
        { nom: 'Bootstrap', logo: 'bootstrap.png' },
      ],
    },
    {
      categorie: 'Outils & Méthodologies',
      liste: [
        { nom: 'Vscode', logo: 'vscode.png' },
        { nom: 'IntelliJ', logo: 'intellij.png' },
        { nom: 'Git', logo: 'git.png' },
        { nom: 'Docker', logo: 'docker.png' },
        { nom: 'Semi-agile', logo: 'agile.svg' },
      ],
    },
  ];

  public competencesTransversales: Array<{
    categorie: string;
    liste: string[];
  }> = [
    {
      categorie: 'Compétences organisationnelles',
      liste: ['Gestion du temps', 'Autonomie', 'Organisation'],
    },
    {
      categorie: 'Compétences interpersonnelles',
      liste: ["Travail d'équipe", 'Communication'],
    },
    {
      categorie: 'Compétences cognitives',
      liste: [
        'Esprit critique',
        'Capacité d’analyse et de synthèse',
        'Résolution de problèmes',
      ],
    },
  ];

  projects: Project[];

  formations = [
    {
      ecole: 'UGA - IUT2',
      lieu: 'Grenoble - 38000',
      annee: '2022-2025',
      diplome: 'BUT Informatique',
      details: [
        "Réalisation d'applications : conception, développement,validation",
      ],
    },
    {
      ecole: 'Lycée du Granier',
      lieu: 'La Ravoire - 73490',
      annee: '2019-2022',
      diplome: 'Baccalauréat général',
      details: [
        'Mathématiques',
        'Numérique et Sciences Informatiques (NSI)',
        'Physique-Chimie',
      ],
    },
  ];

  experiences = [
    {
      title: 'Alternant - Développeur Front-End',
      company: 'GEODIS',
      period: 'Août 2024 - Août 2025',
      tasks: ['Modernisation et uniformisation des applicationss internes'],
      skills: ['Angular', 'HTML', 'SCSS', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Stage - Développeur Front-End',
      company: 'GEODIS',
      period: 'Avril 2024 - Juin 2024',
      tasks: ["Modernisation d'une application interne"],
      skills: ['Angular', 'HTML', 'SCSS', 'TypeScript', 'Node.js'],
    },
  ];

  private readonly router: Router = inject(Router);
  private readonly projectService = inject(ProjetService);

  goToProject(path: string): void {
    this.router.navigate(['/projets/', path]);
  }

  goToProjects(): void {
    this.router.navigate(['/projets']);
  }

  constructor() {
    this.projects = this.projectService.getProjectsSlice(3);
  }
}
