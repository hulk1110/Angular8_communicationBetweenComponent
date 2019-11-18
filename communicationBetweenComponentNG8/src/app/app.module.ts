import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';


// services
import {CartService } from './cart.service';
import { ParentComponent } from './parent/parent.component';

import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
