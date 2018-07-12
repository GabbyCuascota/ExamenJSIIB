import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {BuscadorComponent} from './Componentes/buscador/buscador.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatBadgeModule} from '@angular/material/badge';
//import {MatIconModule} from '@angular/material/icon';
import {PadreComponent} from './Componentes/padre/padre.component';
import {PadreService} from "./Servicios/padre.service";
import {HttpClientModule,} from "@angular/common/http";
import {HijoComponent} from './Componentes/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    //NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //MatBadgeModule,
    //MatIconModule,
    HttpClientModule
  ],
  providers: [
    PadreService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
