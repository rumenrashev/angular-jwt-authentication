import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveCredentials(response : any) {
      localStorage.setItem('userId',response.userId);
      localStorage.setItem('token',response.token);
      localStorage.setItem('username',response.username);
      localStorage.setItem('email',response.email);
  }
  getUsername() {
    return localStorage.getItem('username');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
