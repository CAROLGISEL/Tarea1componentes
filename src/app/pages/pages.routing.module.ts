import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
const routes: Routes = [
  //rutas protegidas
  {
    path: 'dashboard', component: PagesComponent,
    children: [
     { path: '', component: PagesComponent },
     // { path: 'products', component: ProductsComponent },
      //{ path: 'categories', component: CategoriesComponent },
      { path:'', redirectTo:'/dashboard', pathMatch:'full'},
    ]
  },
  //{path:'**', component: NoFoundPageComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
