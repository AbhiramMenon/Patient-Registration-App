import { Routes } from '@angular/router';
import { AppComponent } from './app.component'; // AppComponent is now standalone by default

export const routes: Routes = [
  // Redirect to /register by default
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: AppComponent }, // Placeholder for RegisterComponent
  { path: 'query', component: AppComponent },    // Placeholder for QueryComponent
  { path: 'about', component: AppComponent },    // Placeholder for AboutComponent
  // Wildcard route for any other path, redirect to register
  { path: '**', redirectTo: '/register' }
];