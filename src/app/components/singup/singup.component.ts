import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  form!: FormGroup


  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
        email : new FormControl(null , [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/), Validators.required]),
        password: new FormControl(null , [Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/), Validators.required])
      })
  }

  onSubmit(){
    this.auth.signUp(this.form.value).then((res) => {
        if (!res.user)return
        this.router.navigate(['/login'])
      })
      .catch((error) => {
        alert(error.message)
        this.router.navigate(['/login'])
      })
  }

  anonim(){
    this.auth.anonim()
  }

}
