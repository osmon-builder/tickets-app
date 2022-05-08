import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tickets } from '../interface/tickets';
import { Ticket } from '../interface/ticket-detail';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient
  ) { }

  
  postTicket(data : any){
    return this.http.post<any>(`${environment.baseURL}/api/ticket`, data);
    }

  getAllTickets(){
    return this.http.get<any>(`${environment.baseURL}/api/ticket`);
  }

  getTicket(id : number ){
    return this.http.get<any>(`${environment.baseURL}/api/ticket/?id=${id}`);
  }

  deleteAllTickets(data : any){
    return this.http.delete<any>(`${environment.baseURL}/api/ticket`, data);
    }

  deleteTickets(id :string){
    return this.http.delete<any>(`${environment.baseURL}/api/ticket/?id=${id}` );
}

 
}

