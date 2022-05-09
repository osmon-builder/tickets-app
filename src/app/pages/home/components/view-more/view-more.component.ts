import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Ticket } from 'src/app/interface/ticket-detail';
import { Tickets } from 'src/app/interface/tickets';

import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.sass']
})
export class ViewMoreComponent implements OnInit {


 ticketid!: Ticket 
 ticket!: Tickets    

  constructor(
    private ticketServ : TicketService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getTicket();  
    console.log(this.getTicket)  
  }


  getTicket(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.ticketServ.getTicket(id)
      .subscribe((res: any ) => {
        let ticket = res.ticket_data
        this.ticketid = ticket
       console.log(ticket)
      })
   }



     
   goBack() {
    this.router.navigate(['']);
  }     
    
  }
 

  


