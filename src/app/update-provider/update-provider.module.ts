// update-provider.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProviderComponent } from './update-provider.component'; // Adjust the path if necessary
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule if you're using routing
const routes: Routes = [
  { path: '', component: UpdateProviderComponent } // Main component for this module
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Use forChild for feature modules
  ]
})
export class UpdateProviderModule {}

