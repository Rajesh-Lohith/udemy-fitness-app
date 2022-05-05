import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TotalCovidService {
  constructor(private http: HttpClient) {}

  getTotalLabels() {
    return this.http.get(
      'http://localhost:8081/covidTest/totalCovidTestLabels'
    );
  }

  getTotalData() {
    return this.http.get('http://localhost:8081/covidTest/totalCovidTestData');
  }
}
