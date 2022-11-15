import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { StartPageComponent } from './componentes/start-page/start-page.component';
import { DispositivosComponent } from './componentes/dispositivos/dispositivos.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarBoyaComponent } from './componentes/configuracion/editar-boya/editar-boya.component';
import { AgregarBoyaComponent } from './componentes/dispositivos/agregar-boya/agregar-boya.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/login/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './componentes/login/registrarse/registrarse.component';
import { MenuComponent } from './componentes/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ConfiguracionComponent,
    EditarBoyaComponent,
    AgregarBoyaComponent,
    DispositivosComponent,
    IniciarSesionComponent,
    RegistrarseComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
