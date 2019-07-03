import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  tryRegister (userRegisterInfo) {
    const url = 'http://localhost:3000/api/register';
    return this.http.post(url, {
      login: userRegisterInfo.userLogin,
      password: userRegisterInfo.userPassword,
      submitPassword: userRegisterInfo.userSubmitPassword
    }, {
      responseType: 'json'
    });
  }
}
