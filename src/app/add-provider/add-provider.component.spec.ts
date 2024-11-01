import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAddComponent } from './add-provider.component';
import { FormsModule } from '@angular/forms';
describe('AddProviderComponent', () => {
  let component: ProviderAddComponent;
  let fixture: ComponentFixture<ProviderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProviderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
