import {  Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {Tickets} from '../../interface/tickets'

@Injectable()

  export class BaseFormTicketService {
    public baseForm: FormGroup;
    public $ticket = new BehaviorSubject<Tickets>(new Tickets);


    public changeItemData(ticket: Tickets): void {
      this.$ticket.next(ticket);
    }

    constructor(private fb: FormBuilder) {
        this.baseForm = this.fb.group({
              
            ni: ['', Validators.required],
            type_doc: ['', Validators.required],
            name: ['', Validators.required],
            last_name: ['', Validators.required],
            cellphone: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required],
            title: ['', Validators.required],
            description: ['', Validators.required],
            type_ticket: [true, Validators.required]  
        });
      }
      public pathFormData(ticket : Tickets): void {
        return this.baseForm.patchValue({ ...ticket });
      }
    
      resetForm(ticket : Tickets) {
        this.baseForm.reset(ticket);
      }
  }
