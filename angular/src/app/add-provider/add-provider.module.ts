// add-provider.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProviderAddComponent } from './add-provider.component'; // Ensure this path is correct

const routes: Routes = [
  { path: '', component: ProviderAddComponent } // The default route for this module
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule] // Export RouterModule if needed
})
export class AddProviderModule {}
