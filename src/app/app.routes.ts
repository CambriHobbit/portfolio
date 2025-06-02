import { Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ProjetPageComponent } from './projet/pages/projet-page/projet-page.component';
import { DetailsProjetPageComponent } from './projet/pages/details-projet-page/details-projet-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'projets', component: ProjetPageComponent },
  { path: 'projets/:id', component: DetailsProjetPageComponent },
  { path: '**', redirectTo: '' }, // Route par défaut (404)
];
