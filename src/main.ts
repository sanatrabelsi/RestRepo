import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Adjust the path as necessary
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Import your routes

// Bootstrap the standalone AppComponent
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Provide the router with your defined routes
  ],
});


