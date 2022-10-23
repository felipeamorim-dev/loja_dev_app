import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(credenciais: Credential): Observable<any> {
    return this.http.post<any>(`${environment.URL_BASE}/login`, credenciais, {
      observe: 'response'
    });
  }

  loginWithSuccess(token: string) {
    if (token) localStorage.setItem('token', token);
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    if (token) return !this.jwtService.isTokenExpired(token);

    return false;
  }
}
