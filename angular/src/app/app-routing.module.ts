import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderListComponent } from './list-provider/list-provider.component'; // Ensure correct paths
import { ProviderAddComponent } from './add-provider/add-provider.component'; // Ensure correct paths

const routes: Routes = [
  { path: 'providers/list', component: ProviderListComponent },
  { path: 'providers/add', component: ProviderAddComponent },
  { path: '', redirectTo: '/providers/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/providers/list' } // Optional: wildcard redirect for any unknown routes
];
// Log the routes when the module is loaded
console.log('Routes loaded:', routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use forRoot to set up routing
  exports: [RouterModule]
})
export class AppRoutingModule {}
