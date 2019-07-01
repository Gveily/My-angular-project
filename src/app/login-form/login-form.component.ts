import {Component, OnInit} from '@angular/core';
import {Login} from '../Interfaces/Login';
import {LoginServiceService} from '../login-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  userLoginInfo: Login = {
    userLogin: '',
    userPassword: ''
  };

  constructor (private loginService: LoginServiceService) {}

  tryLogin() {
    this.loginService
      .tryLogin(this.userLoginInfo.userLogin, this.userLoginInfo.userPassword)
      .subscribe((res) => {
        // this.loginData = JSON.parse(res);
        // console.log(this.loginData);
        console.log(res);
      })
  }

  ngOnInit() {
  }

}
