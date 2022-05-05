import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuildingPermitService {
  constructor(private http: HttpClient) {}

  getBuildingPermitLabels() {
    return this.http.get(
      'http://34.125.177.187:8081/buildingPermits/buildingPermitsLabels'
    );
  }

  getBuildingPermitData() {
    return this.http.get(
      'http://34.125.177.187:8081/buildingPermits/buildingPermitsData'
    );
  }
}
