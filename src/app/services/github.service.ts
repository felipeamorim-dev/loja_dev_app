import { environment } from 'src/environments/environment';
import { first, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getProfileUser(githubUsername: string): Observable<any> {
    return this.http.get<any>(`${environment.URL_BASE_GITHUB}githubUsername`).pipe(first());
  }
}
