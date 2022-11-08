import { environment } from 'src/environments/environment';
import { Observable, first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  createUser(user: Usuario): Observable<any> {
    return this.http.post<any>(`${environment.URL_BASE}/api/usuarios`, user).pipe(first());
  }

  findById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.URL_BASE}/${id}`).pipe(first());
  }

  findPerUsername(username: string): Observable<any> {
    return this.http.get<any>(`${environment.URL_BASE}/api/usuarios/nome/${username}`).pipe(first());
  }

  findWalletPerUser(usuarioId: number): Observable<any> {
    return this.http.get<any>(`${environment.URL_BASE}/api/carteiras/saldo/${usuarioId}`).pipe(first());
  }
}
