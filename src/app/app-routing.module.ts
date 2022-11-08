import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/apresentacao/apresentacao.module').then(m => m.ApresentacaoModule) },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'carrinho', loadChildren: () => import('./components/carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: '404', loadChildren: () => import('./components/pag-error/pag-error.module').then(m => m.PagErrorModule) },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
