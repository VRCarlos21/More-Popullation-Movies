import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {
  path:'iniciar_sesion',
  component:LoginComponent
  },
  // {
  //   path:'populares',
  //   loadChildren:()=> import {  } from './modules/movies'
  // },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'iniciar_sesion'


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
