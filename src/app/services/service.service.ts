import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  SaveUser(form: any) {
    return this.http.post('https://fakestoreapi.com/products', form);
  }
}
