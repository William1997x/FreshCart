import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ControlCountPipe } from './control-count.pipe';


@NgModule({
  declarations: [
    CartComponent,
    ControlCountPipe
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
