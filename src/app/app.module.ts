import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/shared/material.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { environment } from 'src/environments/environment';
import { PositiveCovidComponent } from './positive-covid/positive-covid.component';
import { NegativeCovidComponent } from './negative-covid/negative-covid.component';
import { BuildingPermitsComponent } from './building-permits/building-permits.component';
import { TaxiTripsCommunityComponent } from './taxi-trips-community/taxi-trips-community.component';
import { TaxiTripsZipcodesComponent } from './taxi-trips-zipcodes/taxi-trips-zipcodes.component';
import { TotalCovidComponent } from './total-covid/total-covid.component';
import { UnemploymentComponent } from './unemployment/unemployment.component';

@NgModule({
  declarations: [
    AppComponent,

    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    PositiveCovidComponent,
    NegativeCovidComponent,
    BuildingPermitsComponent,
    TaxiTripsCommunityComponent,
    TaxiTripsZipcodesComponent,
    TotalCovidComponent,
    UnemploymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule,
  ],
  providers: [
    { provide: BUCKET, useValue: environment.firebaseConfig.storageBucket },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
