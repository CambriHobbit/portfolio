import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Project from '../../../models/projet.model';
import { ProjetService } from '../../../providers/projets/projet.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-details-projet-page',
  imports: [NgOptimizedImage],
  templateUrl: './details-projet-page.component.html',
  styleUrl: './details-projet-page.component.css',
})
export class DetailsProjetPageComponent {
  project: Project | undefined;

  // Providers
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly projectService: ProjetService = inject(ProjetService);

  constructor() {
    const projectId = this.route.snapshot.paramMap.get('id');


    if (!projectId) {
      return;
    }

    this.project = this.projectService.getProjectById(projectId);

  }
}
