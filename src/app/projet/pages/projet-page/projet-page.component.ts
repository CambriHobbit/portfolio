import { Component, computed, DestroyRef, inject, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Project from '../../../models/projet.model';
import { ProjetService } from '../../../providers/projets/projet.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet-page',
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './projet-page.component.html',
  styleUrl: './projet-page.component.css',
})
export class ProjetPageComponent {
  projects: Signal<Project[]>;
  filteredProjects: Project[] = [];
  allTechnologies: string[] = [];

  searchForm: FormGroup = new FormGroup({
    searchTerm: new FormControl<string>(''),
    technologies: new FormControl<string>(''),
  });

  // Providers
  private readonly projectService: ProjetService = inject(ProjetService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly router: Router = inject(Router);

  constructor() {
    this.projects = this.projectService.getProjects();
    this.allTechnologies = this.projectService.getAllTech();
  }

  ngOnInit(): void {
    // S'abonner aux changements du formulaire pour filtrer
    this.searchForm.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((values) => {
        this.projectService.searchProject(values.searchTerm.trim());
        this.projectService.filterByTech(values.technologies.trim());
      });
  }

  clearFilters(): void {
    this.searchForm.reset({
      searchTerm: '',
      technologies: '',
    });
  }

  goToProject(path: string): void {
    this.router.navigate(['/projets/', path]);
  }


  transformDescription(description: string): string {
    return description;
  }
}
