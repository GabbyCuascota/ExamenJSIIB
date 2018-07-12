import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModelosphComponent } from './modelosph/modelosph.component';
import { AtributospComponent } from './atributosp/atributosp.component';
import { AnadircarritoComponent } from './anadircarrito/anadircarrito.component';
import { CompletarordenComponent } from './completarorden/completarorden.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModelosphComponent,
    AtributospComponent,
    AnadircarritoComponent,
    CompletarordenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
