import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  usuarioFormDialog!: FormGroup;

  imgDefault: string = "../../../../assets/img/person.svg";

  dialogRef!: MatDialogRef<DialogComponent>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Usuario) { }

  ngOnInit(): void {
    this.imgDefault = this.data.urlImagePerfil;

    this.usuarioFormDialog = new FormGroup({
      nome: new FormControl(this.data.nome, Validators.required),
      nomeUsuario: new FormControl(this.data.nomeUsuario, Validators.required),
      email: new FormControl(this.data.email, Validators.email),
      senha: new FormControl('', [Validators.required, Validators.min(3)])
    })
  }

  onNoclick() {
    this.dialogRef.close();
  }

  salvar(): Usuario {
    this.updateDataUsuarioForm(this.usuarioFormDialog.getRawValue());
    return this.data;
  }

  updateDataUsuarioForm(usuarioForm: any){
    this.data.nome = usuarioForm.nome;
    this.data.nomeUsuario = usuarioForm.nomeUsuario;
    this.data.email = usuarioForm.email;
    this.data.senha = usuarioForm.senha;
  }

  validatedForm(): boolean {
    return this.usuarioFormDialog.invalid;
  }

}
