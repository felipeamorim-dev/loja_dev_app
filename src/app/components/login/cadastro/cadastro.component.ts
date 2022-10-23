import { Usuario } from './../../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = {
    nome: 'Felipe da Silva Amorim',
    nomeUsuario: 'felipeam-dev',
    email: 'felipeam.dev@gmail.com',
    senha: '123',
    urlImagePerfil: '',
    perfis: [
      "CLIENTE"
    ]
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: this.usuario
    })
  }

}
