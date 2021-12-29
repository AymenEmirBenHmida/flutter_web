import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ReservationsComponent } from './reservations/reservations.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { MyChartFComponent } from './my-chart-f/my-chart-f.component';
import { LoginComponent } from './login/login.component';
import { PrintTicketComponent } from './print-ticket/print-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    ReservationsComponent,
    UpdateReservationComponent,
    MyChartFComponent,
    LoginComponent,
    PrintTicketComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
         ReactiveFormsModule ,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
