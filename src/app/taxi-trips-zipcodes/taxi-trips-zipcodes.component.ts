import { Component, OnInit } from '@angular/core';
import { TaxiZipcodeService } from './service';

@Component({
  selector: 'app-taxi-trips-zipcodes',
  templateUrl: './taxi-trips-zipcodes.component.html',
  styleUrls: ['./taxi-trips-zipcodes.component.scss'],
})
export class TaxiTripsZipcodesComponent implements OnInit {
  taxiTripsData: any;

  constructor(private tzs: TaxiZipcodeService) {}

  ngOnInit(): void {
    this.tzs.getTaxiTripsDataByzipcode().subscribe((data) => {
      this.taxiTripsData = data;
    });
  }
}
