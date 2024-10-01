import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,AngularFireAuthModule], // Include CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  signUpForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private firestore: AngularFirestore) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.signUpForm.get('email');
  }

  submitForm() {
    if (this.signUpForm.valid) {
      this.firestore.collection('emailSignUps').add({
        email: this.email?.value
      }).then(() => {
        this.isSubmitted = true;
      }).catch(error => {
        console.error("Error saving email: ", error);
      });
    }
  }
}
