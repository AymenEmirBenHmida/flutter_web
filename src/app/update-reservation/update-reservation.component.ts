import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {
  currentTicket;
  constructor(private cinemaService : CinemaService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cinemaService.consulterTicket(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentTicket = prod; } ) ;
  }
  updateTicket() {
    this.cinemaService.updateTicket(this.currentTicket).subscribe(prod => {
    this.router.navigate(['ticketsReserved']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
