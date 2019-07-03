import {Component, OnInit} from '@angular/core';
import {Login} from '../Interfaces/Login';
import {LoginServiceService} from '../login-service.service';
import {Router} from '@angular/router';

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

  constructor (private loginService: LoginServiceService,
               private router: Router) {}

  tryLogin() {
    this.loginService
      .tryLogin(this.userLoginInfo.userLogin, this.userLoginInfo.userPassword)
      .subscribe((res) => {
        this.router.navigate(['./messenger']);
      })
  }

  ngOnInit() {
  }

}
