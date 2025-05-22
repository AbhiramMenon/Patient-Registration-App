import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // <-- IMPORTANT: Keep RouterOutlet here

// import { LayoutComponent } from './shared/layout/layout.component'; // <-- REMOVE THIS LINE

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, // <-- IMPORTANT: Keep RouterOutlet here
    // LayoutComponent // <-- REMOVE LayoutComponent from imports
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'patient-registration-app';
}