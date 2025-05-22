import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { RegisterComponent } from './features/register/register.component'; // Import feature components
import { QueryComponent } from './features/query/query.component';
import { AboutComponent } from './features/about/about.component';


export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' }, // Redirect root to /register
  {
    path: '', // This empty path means this route serves as a layout wrapper
    component: LayoutComponent, // The LayoutComponent is loaded here
    children: [
      // These children routes will be rendered INSIDE the <router-outlet> of LayoutComponent
      { path: 'register', component: RegisterComponent }, // Use actual components
      { path: 'query', component: QueryComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: '**', redirectTo: '/register' } // Wildcard route for unmatched paths
];