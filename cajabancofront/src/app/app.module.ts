import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BancoComponent } from './banco/banco.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

const routes = [
  { path: 'banco', component: BancoComponent },
  { path: 'configuracion', component: ConfiguracionComponent }
];

@NgModule({
  declarations: [BancoComponent, ConfiguracionComponent,AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configuración de rutas
    AppComponent, // Importamos AppComponent, pero no lo declaramos
    BancoComponent,
    ConfiguracionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }