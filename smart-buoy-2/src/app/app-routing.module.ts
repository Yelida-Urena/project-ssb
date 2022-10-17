import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DevicesComponent } from './devices/devices.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReportsComponent } from './reports/reports.component';
import { StartPageComponent } from './start-page/start-page.component';
import { EditarBoyaComponent } from './configuracion/editar-boya/editar-boya.component';
import { AgregarBoyaComponent } from './devices/agregar-boya/agregar-boya.component';

const routes: Routes = [
  {path: 'start-page', component: StartPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'devices', component: DevicesComponent},
  {path: 'editar-boya', component: EditarBoyaComponent},
  {path: 'agregar-boya', component: AgregarBoyaComponent},
  { path: '**', component: StartPageComponent },
  { path: '',   redirectTo: 'start-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
