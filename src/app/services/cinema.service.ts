import { chartdata } from './../models/chartdata.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public host:string="http://localhost:8081";

  constructor(private http:HttpClient, private authService: AuthService) { }

  public getVilles(){
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get(this.host+"/villes",{headers:httpHeaders});
  }

  public getCinemas(v) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get(v._links.cinemas.href,{headers:httpHeaders});
  }

  public getSalles(c) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get(c._links.salles.href,{headers:httpHeaders});
  }

  public getProjections(salle) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    let url=salle._links.projections.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p1",{headers:httpHeaders});
  }

  public getTicketsPlaces(p) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    let url=p._links.tickets.href.replace("{?projection}","");
    return this.http.get(url+"?projection=t1",{headers:httpHeaders});
  }

  public payerTickets(dataForm) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post(this.host+"/payerTickets",dataForm,{headers:httpHeaders});
  }

  public getTicketsReserved() {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get(this.host+"/ticketsReserved",{headers:httpHeaders});
  }

  supprimerTicket(id : number) {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    const url = `${this.host}/deleteTicket/${id}`;
    const headers = new HttpHeaders({"Authorization":jwt})
      ;
    return this.http.delete(url,{headers:headers});
    }

    updateTicket(ticket) 
    {
      let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
      const headers = new HttpHeaders({"Authorization":jwt});
    return this.http.put(this.host+"/updateTicket", ticket,{headers:headers});
    }

    consulterTicket(id: number) {
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      const headers = new HttpHeaders({"Authorization":jwt})
      const url = `${this.host}/tickets/${id}`;
      return this.http.get(url,{headers:headers});
      }

      getChartData() : Observable<chartdata>{
        let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      const headers = new HttpHeaders({"Authorization":jwt})
        const url = `${this.host}/chart`;
        return this.http.get<chartdata>(url,{headers:headers});
        }
}
