import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaxiCommunityService {
  constructor(private http: HttpClient) {}

  getTaxiCommunityData() {
    return this.http.get(
      'http://localhost:8081/taxiTrips/taxiTripsDataByCommunityArea'
    );
  }
}
