import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingPermitsComponent } from './building-permits/building-permits.component';
import { NegativeCovidComponent } from './negative-covid/negative-covid.component';
import { PositiveCovidComponent } from './positive-covid/positive-covid.component';
import { TaxiTripsCommunityComponent } from './taxi-trips-community/taxi-trips-community.component';
import { TaxiTripsZipcodesComponent } from './taxi-trips-zipcodes/taxi-trips-zipcodes.component';
import { TotalCovidComponent } from './total-covid/total-covid.component';
import { UnemploymentComponent } from './unemployment/unemployment.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'positive-covid',
    component: PositiveCovidComponent,
  },
  {
    path: 'negative-covid',
    component: NegativeCovidComponent,
  },
  {
    path: 'total-covid',
    component: TotalCovidComponent,
  },
  {
    path: 'building-permits',
    component: BuildingPermitsComponent,
  },
  {
    path: 'community-taxi-trips',
    component: TaxiTripsCommunityComponent,
  },
  {
    path: 'zipcode-taxi-trips',
    component: TaxiTripsZipcodesComponent,
  },
  {
    path: 'unemployment-rates',
    component: UnemploymentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
