import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //gestiona las rutas
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
];
//se agrega un nueva ruta de reuter  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
