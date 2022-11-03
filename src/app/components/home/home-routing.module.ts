import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/app/core/guard.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '',
    canActivate: [GuardGuard],
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
