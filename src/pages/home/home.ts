import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //private rootPage: any = StartPage;
  constructor( public nav: NavController, public authData: AuthProvider) {
  this.authData = authData;
  }

 logOut(){
  this.authData.logoutUser().then(() => {
    this.nav.setRoot(LoginPage);
  });
}
}
