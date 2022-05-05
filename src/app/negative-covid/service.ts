import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NegativeCovidService {
  constructor(private http: HttpClient) {}

  getNegativeLabels() {
    return this.http.get(
      'http://localhost:8081/covidTest/negativeCovidTestLabels'
    );
  }

  getNegativeData() {
    return this.http.get(
      'http://localhost:8081/covidTest/negativeCovidTestData'
    );
  }
}
