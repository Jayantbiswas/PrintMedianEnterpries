import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { UserStorageService } from './../storage/user-storage.service';

const url = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private userStorageService: UserStorageService
  ) {}

  login(userName: string, password: string): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { userName, password };

    return this.http
      .post(url + 'authenticate', body, { headers, observe: 'response' })
      .pipe(
        map((res) => {
          const token = res.headers.get('authorization')?.substring(7);
          const user = res.body;
          if (token && user) {
            this.userStorageService.saveToken(token);
            this.userStorageService.saveUser(user);
            return true;
          }
          return false;
        })
      );
  }

  register(signupRequest: any): Observable<any> {
    return this.http.post(url + 'sign-up', signupRequest).pipe(
      catchError((error) => {
        console.error('Error registering user:', error);
        return throwError(error);
      })
    );
  }
}
