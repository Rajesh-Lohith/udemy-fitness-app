import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaxiZipcodeService {
  constructor(private http: HttpClient) {}

  getTaxiTripsDataByzipcode() {
    return this.http.get(
      'http://34.125.177.187:8081/taxiTrips/taxiTripsDataByZipcode'
    );
  }
}
