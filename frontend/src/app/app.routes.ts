import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginComponent} from './login/login.component';
import {ModelosphComponent} from './modelosph/modelosph.component';
import {HomeComponent} from "./home/home.component";
import {ModeloPapaComponent} from "./modelo-papa/modelo-papa.component";
import {ModeloHijoComponent} from "./modelo-hijo/modelo-hijo.component";
import {CarritoComponent} from "./carrito/carrito.component";


const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'modelopapa', component: ModeloPapaComponent},
  {path: 'modelohijo', component: ModeloHijoComponent},
  {path: 'carrito', component: CarritoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
