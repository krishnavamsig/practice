import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartsComponent } from './carts/carts.component';
import {Carts3Component} from './carts3/carts3.component';
import {Carts4Component} from './carts4/carts4.component';
import {Carts5Component} from './carts5/carts5.component';
import {Carts6Component} from './carts6/carts6.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'carts',component: CartsComponent},
  {path: 'carts3',component: Carts3Component},
  {path: 'carts4',component: Carts4Component},
  {path: 'carts5',component: Carts5Component},
  {path: 'carts6',component: Carts6Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
