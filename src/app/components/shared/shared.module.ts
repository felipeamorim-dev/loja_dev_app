import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Formulário reativo
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Import do angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
