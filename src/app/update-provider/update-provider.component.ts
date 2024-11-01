// update-provider.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProviderService } from '../services/provider.service'; // Adjust the path as necessary
import { Provider } from '../models/provider.model'; // Import your model
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class UpdateProviderComponent implements OnInit {
  provider: Provider; // Ensure this property is declared

  constructor(
    private providerService: ProviderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.provider = { id: 0, name: '', email: '', address: '' }; // Initialize provider
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get the ID from the route
    if (id) {
      this.providerService.getProvider(+id).subscribe((data: Provider) => {
        this.provider = data; // Populate the provider object
      });
    }
  }

  updateProvider(myForm: NgForm): void {
    if (myForm.valid) {
      this.providerService.updateProvider(this.provider).subscribe(() => {
        this.router.navigate(['/providers']); // Navigate after update
      });
    }
  }
}
