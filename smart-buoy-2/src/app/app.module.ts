import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { JsonPipe } from '@angular/common';
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
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { ReporteBoyaComponent } from './componentes/reportes/reporte-boya/reporte-boya.component';
import { ImagenBoyaComponent } from './componentes/dispositivos/imagen-boya/imagen-boya.component';


import { NgbDate, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgChartsModule } from 'ng2-charts';


import { ChartModule } from '@syncfusion/ej2-angular-charts';

import { AgmCoreModule } from '@agm/core';

import { GoogleMapsModule } from '@angular/google-maps'

import { LightboxModule } from 'ngx-lightbox';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';



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
    ReportesComponent,
    ReporteBoyaComponent,
    ImagenBoyaComponent,
    SobreNosotrosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgbDatepickerModule,
    ChartModule,
    LightboxModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNnbwvBf3cNqXLAOG8bt5zpuFmgeiIzjs',
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
