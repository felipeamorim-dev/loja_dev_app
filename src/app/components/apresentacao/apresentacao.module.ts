import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApresentacaoRoutingModule } from './apresentacao-routing.module';
import { ApresentacaoComponent } from './apresentacao.component';


@NgModule({
  declarations: [
    ApresentacaoComponent
  ],
  imports: [
    CommonModule,
    ApresentacaoRoutingModule
  ]
})
export class ApresentacaoModule { }
