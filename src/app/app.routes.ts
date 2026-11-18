import { Routes } from '@angular/router';
import { ParkList } from './application/EXERCISE/components/park-list/park-list';
import { ParkSelected } from './application/EXERCISE/components/park-selected/park-selected';

export const routes: Routes = [
  { path: '', redirectTo: 'parks', pathMatch: 'full' },
  { path: 'parks', component: ParkList },
  { path: 'parks/:id', component: ParkSelected },
  { path: 'error', component: Error },
  { path: '**', redirectTo: 'error' }
];