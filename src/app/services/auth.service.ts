import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credenciais: Credential): Observable<any> {
    return this.http.post<any>(`${environment.URL_BASE}/login`, credenciais, {
      observe: 'response'
    });
  }

  loginComSucesso(token: string) {
    if (token) localStorage.setItem('token', token);
  }
}
