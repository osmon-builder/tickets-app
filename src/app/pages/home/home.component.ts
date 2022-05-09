import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';


import { Tickets } from 'src/app/interface/tickets';


import Swal from 'sweetalert2'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
 

  ticket: Tickets [] = []

 
  constructor(
    private ticketServ : TicketService,


  ) {  
   
   }

  ngOnInit( ): void {
    this.setTickets()
    console.log(this.ticket)
    }



    setTickets(){
      this.ticketServ.getAllTickets()
      .subscribe(res => {
        this.ticket = res.tickets 
         
      })
    }


   deletTicket(ticket: Tickets ) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
      
          this.ticketServ.deleteTickets(ticket.id)
                  .subscribe( res => {
                    this.ticket = res
                    return this.setTickets()
              })          
        Swal.fire(
          'Deleted!',
          'Your ticket has been deleted.',
          'success'
        )
      }
    })   
  }
  

  

}
