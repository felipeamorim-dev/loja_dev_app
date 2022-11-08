import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagErrorRoutingModule } from './pag-error-routing.module';
import { PagErrorComponent } from './pag-error.component';


@NgModule({
  declarations: [
    PagErrorComponent
  ],
  imports: [
    CommonModule,
    PagErrorRoutingModule
  ]
})
export class PagErrorModule { }
