import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  logout(){
    this.authService.logOut().then(()=> {
      this.router.navigate(['/login'])
    }).catch((error) => alert(error.message))
  }
}
