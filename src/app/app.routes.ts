import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details-component/details-component';
import { HomeComponent } from './components/home-component/home-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', component: NotFoundComponent } 
];
