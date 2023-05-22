import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BredcrumbsComponent } from './bredcrumbs/bredcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { PagesComponent } from '../pages/pages.component';




@NgModule({
  declarations: [
    SidebarComponent,
    DashboardComponent,
    HeaderComponent,
    BredcrumbsComponent,
    FooterComponent,
    NavComponent,
  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    DashboardComponent,
    HeaderComponent,
    BredcrumbsComponent,
    FooterComponent,
    NavComponent,
  ]
})
export class SharedModule { }
