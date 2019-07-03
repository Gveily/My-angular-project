import { Component, OnInit } from '@angular/core';
import {Register} from '../Interfaces/register';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  userRegisterInfo: Register = {
    userLogin: '',
    userPassword: '',
    userSubmitPassword: ''
  };

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  checkPasswords() {
    return this.userRegisterInfo.userPassword === this.userRegisterInfo.userSubmitPassword;
  }

  tryRegister () {
    if (this.checkPasswords()) {
      console.log(`Hi all, my name is ${this.userRegisterInfo.userLogin} and I'm registered`)
      this.registerService
        .tryRegister(this.userRegisterInfo)
        .subscribe((res) => {
          console.log(res)
        })
    } else {
      console.log(`incorrect password`);
    }
  }

}
