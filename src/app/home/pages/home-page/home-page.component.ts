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
  public nom: string = 'Votre Nom';
  public titre: string = 'Développeur Web';
  public description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum felis est, quis rutrum diam porttitor id. In nisi magna, varius ac varius et, ornare id dui. Ut pulvinar pellentesque magna, eget faucibus turpis imperdiet vulputate. Sed ac tristique est, sed eleifend mi. In commodo velit leo, suscipit imperdiet sem pretium ac. Phasellus pharetra odio id accumsan tempor. Donec convallis faucibus accumsan. Proin eget vulputate urna. Morbi lectus metus, dignissim eu accumsan quis, vehicula ut erat. Nam ut iaculis urna.';

  public linkLinkedIn: string = 'https://www.linkedin.com/in/gabin-mussio-2b652b369/';  
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
      ecole: 'UNIVERSITÉ DE TECHNOLOGIES',
      lieu: 'Lyon',
      annee: '2018',
      diplome: 'Licence Informatique',
      details: [
        'Spécialisation en programmation orientée objet',
        'Formation en bases de données et architecture logicielle',
        "Projet étudiant: Développement d'une application mobile",
      ],
    },
    {
      ecole: 'LYCÉE TECHNIQUE',
      lieu: 'Marseille',
      annee: '2015',
      diplome: 'Baccalauréat STI2D',
      details: [
        "Spécialisation en systèmes d'information et numérique",
        'Formation en mathématiques et informatique',
      ],
    },
  ];

  experiences = [
    {
      title: 'Développeur Front-End',
      company: 'Agence WebNova',
      period: 'Janv 2023 - Présent',
      tasks: [
        'Développement d’interfaces réactives avec Angular',
        'Intégration de maquettes Figma responsives',
        'Optimisation des performances et accessibilité',
      ],
      skills: ['Angular', 'SCSS', 'RxJS', 'TypeScript'],
    },
    {
      title: 'Développeur Web Full-Stack',
      company: 'Startup DevBoost',
      period: 'Juin 2021 - Déc 2022',
      tasks: [
        'Conception d’API REST avec Node.js',
        'Déploiement via Docker et CI/CD',
        'Création de dashboards d’administration Angular',
      ],
      skills: ['Node.js', 'Express', 'Angular', 'Docker'],
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
