import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/), Validators.required]),
      password: new FormControl(null, [Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/), Validators.required])
    });
    if(this.auth.user){
      this.router.navigate(['/home'])
    }
  }

  onSubmit(){
    if(!this.form.value)return
    this.auth.login(this.form.value)
  }

}
