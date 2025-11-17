import { Routes } from '@angular/router';
import { Home } from './layout/home/home';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },

  {
    path: 'welcome',
    loadComponent: () =>
      import('./features/welcome/welcome').then(
        (m) => m.Welcome,
      ),
  },

  {
    path: 'store',
    component: Home,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },

      {
        path: 'products',
        loadComponent: () =>
          import('./features/products/products').then(
            (m) => m.Products,
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about').then(
            (m) => m.About,
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact').then(
            (m) => m.Contact,
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
            import('./features/cart/cart').then((m) => m.Cart),
      },
    ],
  },

  // Bilinmeyen route'lar Welcome'a gitsin
  { path: '**', redirectTo: 'welcome' },
];
