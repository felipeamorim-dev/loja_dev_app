import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Formulário reativo
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Import do angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AuthInterceptorProvider } from 'src/app/interceptors/auth.interceptor';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [AuthInterceptorProvider]
})
export class SharedModule { }
