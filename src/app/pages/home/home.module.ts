import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';



import {AddTicketComponent} from './components/add-ticket/add-ticket.component'

import { MatDialogModule } from '@angular/material/dialog';


import { BaseFormTicketService } from '../utilities/base-from.ticket.service';

import { CommonModule } from '@angular/common';

import { ViewMoreComponent } from './components/view-more/view-more.component';



const  routes: Routes = [
  {
  path:"", children: [
    {path:"", component: HomeComponent},
    {path: "add-ticket" , component: AddTicketComponent},
    {path: "view-more/:id", component: ViewMoreComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ]
}
]

@NgModule({
  declarations: [
    HomeComponent,
    AddTicketComponent,
    ViewMoreComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    BaseFormTicketService
  ]
  
})
export class HomeModule { }
