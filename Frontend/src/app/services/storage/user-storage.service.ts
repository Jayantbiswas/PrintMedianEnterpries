import { Injectable } from '@angular/core';

const TOKEN = 'Ecom-Token';
const USER = 'Ecom-User';

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  constructor() {}

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public saveUser(user: any) {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken(): string {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(TOKEN);
    } else return '';
  }

  static getUser(): any {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(USER);
    }
  }

  static getUserId(): string {
    const user = this.getUser();
    if (user == null) {
      return '';
    }
    const { role, userId } = JSON.parse(user);
    return userId;
  }

  static getUserRole(): string {
    const user = this.getUser();
    if (user == null) {
      return '';
    }
    const { role, userId } = JSON.parse(user);
    return role;
  }

  static isAdminLoggedIn(): boolean {
    if (this.getToken === null) {
      return false;
    }
    const role: string = this.getUserRole();
    return role == 'ADMIN';
  }

  static isUserLoggedIn(): boolean {
    if (this.getToken() === null) {
      return false;
    }
    const role: string = this.getUserRole();
    return role == 'USER';
  }

  static signOut() {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}
