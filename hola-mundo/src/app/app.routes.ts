import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  { path: '', redirectTo: 'estructura', pathMatch: 'full' },
  {
    path: 'estructura',
    loadComponent: () => import('./pages/estructura/estructura.page').then( m => m.EstructuraPage)
  },
  {
    path: 'listas',
    loadComponent: () => import('./pages/listas/listas.page').then( m => m.ListasPage)
  },
  {
    path: 'formularios',
    loadComponent: () => import('./pages/formularios/formularios.page').then( m => m.FormulariosPage)
  },
  {
    path: 'acciones',
    loadComponent: () => import('./pages/acciones/acciones.page').then( m => m.AccionesPage)
  },
  {
    path: 'overlays',
    loadComponent: () => import('./pages/overlays/overlays.page').then( m => m.OverlaysPage)
  },
  {
    path: 'visual',
    loadComponent: () => import('./pages/visual/visual.page').then( m => m.VisualPage)
  },
  {
    path: 'listas',
    loadComponent: () => import('./pages/listas/listas.page').then( m => m.ListasPage)
  },
  {
    path: 'formularios',
    loadComponent: () => import('./pages/formularios/formularios.page').then( m => m.FormulariosPage)
  },
  {
    path: 'acciones',
    loadComponent: () => import('./pages/acciones/acciones.page').then( m => m.AccionesPage)
  },
  {
    path: 'overlays',
    loadComponent: () => import('./pages/overlays/overlays.page').then( m => m.OverlaysPage)
  },
  {
    path: 'visual',
    loadComponent: () => import('./pages/visual/visual.page').then( m => m.VisualPage)
  },
];
