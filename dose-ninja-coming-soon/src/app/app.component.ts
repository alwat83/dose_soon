// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appConfig } from './app.config'; // Ensure correct path
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dose-ninja-coming-soon';
}

// main.ts
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
