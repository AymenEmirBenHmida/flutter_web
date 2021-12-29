import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CinemaComponent} from './cinema/cinema.component';
import { LoginComponent } from './login/login.component';
import { MyChartFComponent } from './my-chart-f/my-chart-f.component';
import { PrintTicketComponent } from './print-ticket/print-ticket.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';


const routes: Routes = [
  {
    path: "cinema",
    component: CinemaComponent,
    
  },
  {
    path: "ticketsReserved",
    component: ReservationsComponent,
    
  },
  {
    path:"updateTicket/:id",
    component: UpdateReservationComponent,
  },
  {
    path:"chart",
    component: MyChartFComponent,
  },
  {path:  'login', component: LoginComponent},
  
  {
    path:"printTicket/:id",
    component: PrintTicketComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
