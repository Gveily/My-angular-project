import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private http: HttpClient) {
  }

  tryLogin (login: string, password: string,) {
    const url = 'http://localhost:3000/api/login';
    return this.http.post(url, {
      login: login,
      password: password
    }, {
      responseType: 'json'
    });
  }
}
