import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    SharedModule,
    PagesRoutingModule, 
    CommonModule,
    RouterModule
  ],

  exports:[
    RouterModule,
  ]
})
export class PagesModule { }
