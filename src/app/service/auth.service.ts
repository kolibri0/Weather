import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: any
  aninimous!: boolean | undefined

  constructor(
    private router: Router,
    private af: AngularFireAuth
  ) { }

  signUp(user: User){
    return this.af.createUserWithEmailAndPassword(user.email, user.password)
  }
  
  login(user: User){
    return this.af.signInWithEmailAndPassword(user.email, user.password)
  }

  loggedIn(){
    this.af.onAuthStateChanged((user)=>{
      if(!user)return
      this.user = user
      this.aninimous = user.isAnonymous
      console.log(this.aninimous)
      this.router.navigate(['/home'])
    })
  }

  anonim(){
    this.af.signInAnonymously()
  }

  logOut(){
    this.user = null
    return this.af.signOut()
  }
}
