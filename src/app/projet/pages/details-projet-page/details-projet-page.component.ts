import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Project from '../../../models/projet.model';
import { NgOptimizedImage } from '@angular/common';
import { ProjetService } from '../../../providers/projets/projet.service';

@Component({
  selector: 'app-details-projet-page',
  imports: [NgOptimizedImage],
  templateUrl: './details-projet-page.component.html',
  styleUrl: './details-projet-page.component.css',
})
export class DetailsProjetPageComponent implements OnInit {
  project: Project | undefined;

  // Providers
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly projectService: ProjetService = inject(ProjetService);

  constructor() {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');

    console.log('Project ID from route:', projectId);

    if (!projectId) {
      console.error('Project ID is missing in the route.');
      return;
    }

    this.project = this.projectService.getProjectById(projectId);
  }
}
