// list-provider.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule
import { ProviderListComponent } from './list-provider.component';

const routes: Routes = [
  { path: '', component: ProviderListComponent } // Main component for this module
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Include RouterModule for child routes
  ],
  exports: [RouterModule] // Export RouterModule if needed elsewhere
})
export class ListProviderModule {}
