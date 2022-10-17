import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoginPageComponent } from './login-page/login-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ReportsComponent } from './reports/reports.component';
import { DevicesComponent } from './devices/devices.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditarBoyaComponent } from './configuracion/editar-boya/editar-boya.component';
import { AgregarBoyaComponent } from './devices/agregar-boya/agregar-boya.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    StartPageComponent,
    ReportsComponent,
    DevicesComponent,
    ConfiguracionComponent,
    AboutUsComponent,
    ContactUsComponent,
    EditarBoyaComponent,
    AgregarBoyaComponent,
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
