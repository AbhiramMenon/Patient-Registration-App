import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { RegisterComponent } from './features/register/register.component';
import { QueryComponent } from './features/query/query.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  {
    path: '', // This empty path now means it's the parent for our layout routes
    component: LayoutComponent, // Load LayoutComponent directly here
    children: [
      // These are the actual feature routes that will load within LayoutComponent's <router-outlet>
      { path: 'register', component: RegisterComponent },
      { path: 'query', component: QueryComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  // You can add other top-level routes here if they don't use the main layout
  // For example: { path: 'login', component: LoginComponent }
  { path: '**', redirectTo: '/register' } // Catch-all redirect
];