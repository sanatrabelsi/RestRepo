import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from '../models/provider.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  urlProviders = 'http://127.0.0.1:8080/providers';

  constructor(private http: HttpClient) {}

  listProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.urlProviders}/list`);
  }

  createProvider(myForm: NgForm): Observable<Provider> {
    const provider = {
      name: myForm.value.providerName,
      email: myForm.value.providerEmail,
      address: myForm.value.providerAddress
    };
    return this.http.post<Provider>(`${this.urlProviders}/add`, provider);
  }

  updateProvider(myObj: Provider): Observable<Provider> {
    return this.http.put<Provider>(`${this.urlProviders}/${myObj.id}`, myObj);
  }

  deleteProvider(myObj: Provider): Observable<void> {
    return this.http.delete<void>(`${this.urlProviders}/${myObj.id}`);
  }

  getProvider(id: number): Observable<Provider> {
    return this.http.get<Provider>(`${this.urlProviders}/${id}`);
  }
}