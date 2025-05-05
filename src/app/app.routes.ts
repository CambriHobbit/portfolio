import { Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ProjetPageComponent } from './projet/pages/projet-page/projet-page.component';
import { ContactPageComponent } from './contact/pages/contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'projets', component: ProjetPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' }, // Route par défaut (404)
];
