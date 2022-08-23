import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrComponent } from './components/err/err.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { AnonimousGuard } from './guard/anonimous.guard';
import { UserGuard } from './guard/user.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AnonimousGuard]},
  {path: 'forecast', component: ForecastComponent, canActivate: [UserGuard]},
  {path: 'login', component: LoginComponent,},
  {path: 'signup', component: SingupComponent},
  {path: '**', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
