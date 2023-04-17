import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent}from './movies.component'
const routes: Routes = [
  {
  path:'',
  component:MoviesComponent
  },

  {
    path:'',
    pathMatch:'full',
    redirectTo:''


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
