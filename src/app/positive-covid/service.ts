import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PositiveCovidService {
  constructor(private http: HttpClient) {}

  getPositiveLabels() {
    return this.http.get(
      'http://34.125.177.187:8081/covidTest/positiveCovidTestLabels'
    );
  }

  getPositiveData() {
    return this.http.get(
      'http://34.125.177.187:8081/covidTest/positiveCovidTestData'
    );
  }
}
