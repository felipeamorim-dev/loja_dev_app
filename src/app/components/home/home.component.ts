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

  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.produtoService.getAllProducts().subscribe({
      next: res => {
        this.products = res;
      }
    })
  }

}
