import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TotalCovidService {
  constructor(private http: HttpClient) {}

  getTotalLabels() {
    return this.http.get(
      'http://34.125.177.187:8081/covidTest/totalCovidTestLabels'
    );
  }

  getTotalData() {
    return this.http.get(
      'http://34.125.177.187:8081/covidTest/totalCovidTestData'
    );
  }
}
