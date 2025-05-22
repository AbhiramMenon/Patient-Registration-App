import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router'; // Remove this line
import { LayoutComponent } from './shared/layout/layout.component'; // Remove this line

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    // RouterOutlet,       // Remove RouterOutlet
     LayoutComponent     // Remove LayoutComponent
    // Keep CommonModule if you are using common directives in app.component.html directly,
    // though for a pure root component, it might not be strictly needed.
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'patient-registration-app';
}