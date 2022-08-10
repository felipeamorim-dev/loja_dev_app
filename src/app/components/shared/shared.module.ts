import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import do angular material
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule
  ]
})
export class SharedModule { }
