import { CarrinhoComponent } from './carrinho.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from '../../core/guard.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [GuardGuard],
    component: CarrinhoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrinhoRoutingModule { }
