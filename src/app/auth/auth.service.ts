import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable()
export class AuthService {
  private isUserAuthenticated: boolean = false;
  authChange = new Subject<boolean>();

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth
  ) {}

  initAuthListener() {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        console.log('User ====== ', JSON.stringify(user));
        this.isUserAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
      } else {
        this.isUserAuthenticated = false;
        this.authChange.next(false);
        this.router.navigate(['/login']);
      }
    });
  }

  registerUser(authData: AuthData) {
    this.angularFireAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((result) => {
        const idToken = this.angularFireAuth.auth.currentUser.getIdToken();
        console.log(result);
        console.log('idToken =', idToken);
      })
      .catch((error) => {
        console.log(error);
      });
    // this.angularFireAuth.auth
    //   .createUserWithEmailAndPassword(authData.email, authData.password)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  login(authData: AuthData) {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

  isAuthenticated() {
    return this.isUserAuthenticated;
  }
}
