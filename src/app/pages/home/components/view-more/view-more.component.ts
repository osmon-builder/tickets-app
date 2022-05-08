import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Ticket } from 'src/app/interface/ticket-detail';

import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.sass']
})
export class ViewMoreComponent implements OnInit {

  public ticket: Ticket [] = []
        

  constructor(
    private ticketServ : TicketService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

   this.getTicket()
    }

   getTicket(){
     const id = parseInt(this.route.snapshot.paramMap.get('id')!);
     this.ticketServ.getTicket(id)
      .subscribe(res => {
        let data = res
        this.ticket = data.ticket_data
        console.log(this.ticket)
      })
   }
     
   goBack() {
    this.router.navigate(['']);
  }     
    
  }
 

  


