import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // <--- Import ReactiveFormsModule, FormBuilder, FormGroup, Validators

// Angular Material Imports for Form Fields
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker'; // For Date of Birth
import { MatNativeDateModule } from '@angular/material/core';     // For MatDatepicker (provides date adapter)


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // <--- Add ReactiveFormsModule
    MatFormFieldModule,  // <--- Add Material Form Field Module
    MatInputModule,      // <--- Add Material Input Module
    MatRadioModule,      // <--- Add Material Radio Button Module
    MatButtonModule,     // <--- Add Material Button Module
    MatDatepickerModule, // <--- Add Material Datepicker
    MatNativeDateModule  // <--- Add MatNativeDateModule (important for datepicker to work)
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm: FormGroup; // Declare the form group

  constructor(private fb: FormBuilder) {
    // Initialize the form with FormBuilder
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required], // Required field
      dateOfBirth: ['', Validators.required],
      contactNumber: [''],
      address: [''],
      gender: ['male', Validators.required] // Default to 'male'
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
      // Here, we'll later integrate with Pglite
    } else {
      console.log('Form is invalid!');
      // Mark all fields as touched to display validation errors
      this.registrationForm.markAllAsTouched();
    }
  }
}