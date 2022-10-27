import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from './../../../services/usuario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './../../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usuarioForm!: FormGroup;

  usuario: Usuario = {
    nome: '',
    nomeUsuario: '',
    email: '',
    senha: '',
    urlImagePerfil: '',
    perfis: [
      "CLIENTE"
    ]
  }

  constructor(
    private dialog: MatDialog,
    private githubService: GithubService,
    private usuarioService: UsuarioService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      nome: new FormControl('', Validators.required)
    })
  }

  buscar() {
    const form = this.usuarioForm.getRawValue();
    this.githubService.getProfileUser(form['nome']).subscribe({
      next: result => {
        this.usuario.nome = result['name'];
        this.usuario.nomeUsuario = result['login'];
        this.usuario.email = result['email'];
        this.usuario.urlImagePerfil = result['avatar_url'];
        this.usuario.perfis = ['CLIENTE'];

        this.openDialog(this.usuario);

      }
    });
  }

  openDialog(usuario: Usuario) {
    let dialogRef = this.dialog.open(DialogComponent, { data: usuario })

    dialogRef.afterClosed().subscribe({
      next: result => this.usuarioService.createUser(result).subscribe({
        next: res => {
          this.toast.success('Usuário cadastrado com sucesso', 'Cadastro de usuário');
          this.router.navigate(['login']);
        }
      })
    })
  }

}
