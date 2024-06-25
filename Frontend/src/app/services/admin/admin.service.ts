import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../storage/user-storage.service';

const url = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  addCategory(categoryDto: any): Observable<any> {
    return this.http.post(url + 'api/admin/category', categoryDto, {
      headers: this.createAthorizationHeader(),
    });
  }

  private createAthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    );
  }
}
