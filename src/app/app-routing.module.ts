import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrComponent } from './components/err/err.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'forecast', component: ForecastComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SingupComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
