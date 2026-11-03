import type { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage),
  },
  {
    path: 'saludo',
    loadComponent: () => import('./pages/saludo/saludo.page').then(m => m.SaludoPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'noticias',
    loadComponent: () => import('./pages/noticias/noticias.page').then(m => m.NoticiasPage),
    children: [
      { path: '', redirectTo: 'uno', pathMatch: 'full' },
      {
        path: 'uno',
        loadComponent: () => import('./pages/noticias/noticias-uno/noticias-uno.page').then(m => m.NoticiasUnoPage),
      },
      {
        path: 'dos',
        loadComponent: () => import('./pages/noticias/noticias-dos/noticias-dos.page').then(m => m.NoticiasDosPage),
      },
      {
        path: 'tres',
        loadComponent: () => import('./pages/noticias/noticias-tres/noticias-tres.page').then(m => m.NoticiasTresPage),
      },
    ],
  },
  {
    path: 'galeria',
    loadComponent: () => import('./pages/galeria/galeria.page').then(m => m.GaleriaPage),
    children: [
      { path: '', redirectTo: 'uno', pathMatch: 'full' },
      {
        path: 'uno',
        loadComponent: () => import('./pages/galeria/galeria-uno/galeria-uno.page').then(m => m.GaleriaUnoPage),
      },
      {
        path: 'dos',
        loadComponent: () => import('./pages/galeria/galeria-dos/galeria-dos.page').then(m => m.GaleriaDosPage),
      },
      {
        path: 'tres',
        loadComponent: () => import('./pages/galeria/galeria-tres/galeria-tres.page').then(m => m.GaleriaTresPage),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.page').then(m => m.NotFoundPage),
  },
];