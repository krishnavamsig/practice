import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Comp1Component } from './comp1/comp1.component';
import { NavheadComponent } from './navhead/navhead.component';
import { Comp2Component } from './comp2/comp2.component';
import { CartsComponent } from './carts/carts.component';
import { Comp3Component } from './comp3/comp3.component';
import { Carts3Component } from './carts3/carts3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Carts4Component } from './carts4/carts4.component';
import { Comp5Component } from './comp5/comp5.component';
import { Carts5Component } from './carts5/carts5.component';
import { Comp6Component } from './comp6/comp6.component';
import { Carts6Component } from './carts6/carts6.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    Comp1Component,
    NavheadComponent,
    Comp2Component,
    CartsComponent,
    Comp3Component,
    Carts3Component,
    Comp4Component,
    Carts4Component,
    Comp5Component,
    Carts5Component,
    Comp6Component,
    Carts6Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
