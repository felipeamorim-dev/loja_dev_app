import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from './../../services/usuario.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Array<Produto>;
  user: Usuario = {
    nome: '',
    nomeUsuario: '',
    email: '',
    senha: '',
    urlImagePerfil: '',
    perfis: []
  }
  saldo!: number;
  panelOpenState = false;

  constructor(
    private produtoService: ProdutosService,
    private auth: AuthService,
    private userService: UsuarioService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getUserLogging(this.auth.decodeToken());
  }

  getProducts() {
    this.produtoService.getAllProducts().subscribe({
      next: res => {
        this.products = res;
      }
    })
  }

  getUserLogging(username: string) {
    this.userService.findPerUsername(username).subscribe({
      next: res => {
        this.user = res
        this.getAmountUser(res['id']);
      }
    })
  }

  getAmountUser(usuarioId: number) {
    this.userService.findWalletPerUser(usuarioId).subscribe({
      next: res => {
        this.saldo = res
      }
    })
  }

  logout() {
    this.auth.logout();
    this.toast.success('Desconexão realizada com sucesso!', 'Logout');
  }

}
