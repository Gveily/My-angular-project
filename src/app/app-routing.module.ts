import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {MessengerComponent} from './messenger/messenger.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RegisterFormComponent} from './register-form/register-form.component';

const routes: Routes = [
  {
    path: 'login-form',
    component: LoginFormComponent
  },
  {
    path: 'register-form',
    component: RegisterFormComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'messenger',
    component: MessengerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
