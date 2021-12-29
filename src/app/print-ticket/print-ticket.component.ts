import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-print-ticket',
  templateUrl: './print-ticket.component.html',
  styleUrls: ['./print-ticket.component.css']
})
export class PrintTicketComponent implements OnInit {

  currentTicket;
  constructor(private cinemaService : CinemaService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cinemaService.consulterTicket(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentTicket = prod;
      setTimeout(function () {
        window.print();
          }, 1000);
     } ) ;
      
      

  }


}
