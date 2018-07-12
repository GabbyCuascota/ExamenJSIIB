import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModelosphComponent } from './modelosph/modelosph.component';
import { AtributospComponent } from './atributosp/atributosp.component';
import { AnadircarritoComponent } from './anadircarrito/anadircarrito.component';
import { CompletarordenComponent } from './completarorden/completarorden.component';
import { HomeComponent } from './home/home.component';
import { ModeloPapaComponent } from './modelo-papa/modelo-papa.component';
import { ModeloHijoComponent } from './modelo-hijo/modelo-hijo.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModelosphComponent,
    AtributospComponent,
    AnadircarritoComponent,
    CompletarordenComponent,
    HomeComponent,
    ModeloPapaComponent,
    ModeloHijoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
