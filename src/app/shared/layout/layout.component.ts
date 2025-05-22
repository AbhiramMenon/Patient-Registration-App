import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

// Angular Router Imports for standalone components
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // <--- ADD THESE IMPORTS

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,       // <--- ADD RouterOutlet here
    RouterLink,         // <--- ADD RouterLink here (for [routerLink] directive)
    RouterLinkActive    // <--- ADD RouterLinkActive here (for routerLinkActive directive)
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  sidenavOpen: boolean = true;

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }
}