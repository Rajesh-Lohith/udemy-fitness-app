import { Component, OnInit } from '@angular/core';
import { TaxiCommunityService } from './service';

@Component({
  selector: 'app-taxi-trips-community',
  templateUrl: './taxi-trips-community.component.html',
  styleUrls: ['./taxi-trips-community.component.scss'],
})
export class TaxiTripsCommunityComponent implements OnInit {
  taxiTripsData: any;

  constructor(private tcs: TaxiCommunityService) {}

  ngOnInit(): void {
    this.tcs.getTaxiCommunityData().subscribe((data) => {
      this.taxiTripsData = data;
    });
  }
}
