import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  form!: FormGroup



  constructor() { }

  ngOnInit(): void {
    
  }

}
