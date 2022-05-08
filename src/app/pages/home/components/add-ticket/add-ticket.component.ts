import { Component, OnInit } from '@angular/core';


import { Tickets } from 'src/app/interface/tickets';
import { TicketService } from 'src/app/services/ticket.service';

import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormTicketService } from 'src/app/pages/utilities/base-from.ticket.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.sass']
})
export class AddTicketComponent implements OnInit {

  id: string | null;
  ticket : Tickets [] = []
  title = 'Add producto';

  constructor(
    private ticketServ : TicketService,
    private aRouter : ActivatedRoute,
    private router: Router,

    public ticketForm: BaseFormTicketService,

   
  ) { 
    this.id = this.aRouter.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    
  }

  addTicket(){
    const ticket = this.ticketForm.baseForm.value;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ticket added',
      showConfirmButton: false,
      timer: 1500
    })
    this.ticketServ.postTicket(ticket).subscribe(res =>{
       res.body
       this.goBack();
    }, error => {
        console.log(error)
    })
  }

 
  

  goBack() {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.ticketForm.resetForm(new Tickets);
  }
}
