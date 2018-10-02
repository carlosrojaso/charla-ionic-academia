import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  flag:boolean = false;
  
  constructor(public fireAuth: AngularFireAuth) {
  }
  
  loginUser(email: string, password: string): any {
    console.log("Login User");
  return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): any {
  return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  
}

  resetPassword(email: string): any {
  return this.fireAuth.auth.sendPasswordResetEmail(email);
    }

  logoutUser(): any {
  return this.fireAuth.auth.signOut();
}


}
