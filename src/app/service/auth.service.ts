import { Injectable } from '@angular/core';
import { getAuth, user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: any

  constructor(
    private router: Router,
    private af: AngularFireAuth
  ){}

  signUp(user: User){
    return this.af.createUserWithEmailAndPassword(user.email, user.password)
  }
  
  login(user: User){
    return this.af.signInWithEmailAndPassword(user.email, user.password).then(() => {
      return this.af.onAuthStateChanged((user)=> {
        if(!user)return
        this.user = user
        this.router.navigate(['/home'])
      })
    }).catch((error) => alert(error.message))
  }



  anonim(){
    return this.af.signInAnonymously().then(() => {
      return this.af.onAuthStateChanged((user)=> {
        if(!user)return
        this.user = user
        console.log(user)
        this.router.navigate(['/home'])
      })
    }).catch((error) => alert(error.message))

   
  }

  logOut(){
    return this.af.signOut().then(()=> {
      this.user = null
      this.router.navigate(['/login'])
    })
    
  }

}
