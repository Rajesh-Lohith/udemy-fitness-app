import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnemploymentService {
  constructor(private http: HttpClient) {}

  getUnemploymentData() {
    return this.http.get(
      'http://localhost:8081/unemploymentRates/unemploymentRatesData'
    );
  }
}
