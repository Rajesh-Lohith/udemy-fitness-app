import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaxiZipcodeService {
  constructor(private http: HttpClient) {}

  getTaxiTripsDataByzipcode() {
    return this.http.get(
      'http://localhost:8081/taxiTrips/taxiTripsDataByZipcode'
    );
  }
}
