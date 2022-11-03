import { environment } from 'src/environments/environment';
import { Produto } from './../model/produto';
import { Observable, first, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Array<Produto>> {
    return this.http.get<Array<Produto>>(`${environment.URL_BASE}/api/produtos`).pipe(take(1));
  }
}
