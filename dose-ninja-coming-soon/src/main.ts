import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const appConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)), // Initialize Firebase
    provideFirestore(() => getFirestore()) // Provide Firestore
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
