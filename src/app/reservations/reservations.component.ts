import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  public tickets;

  constructor(public cinemaService:CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.getTicketsReserved().subscribe(data=>{ this.tickets=data; },error => { console.log(error); })

  }

  supprimerTicket(ticket)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.cinemaService.supprimerTicket(ticket.id).subscribe(() => {
console.log("ticket supprimé");
});
this.SuprimerProduitDuTableau(ticket);
}
SuprimerProduitDuTableau(prod ) {
  this.tickets.forEach((cur, index) => {
  if(prod.id=== cur.id) {
  this.tickets.splice(index, 1);
  }
  });
  }


}
