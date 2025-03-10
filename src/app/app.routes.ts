import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'parent',
    loadComponent: () =>
      import('./Components/parent/parent.component').then(
        (m) => m.ParentComponent
      )
  },
  {
    path: 'practice',
    loadComponent: () =>
      import('./Components/practice/practice.component').then(
        (m) => m.PracticeComponent
      ),
  },
];
