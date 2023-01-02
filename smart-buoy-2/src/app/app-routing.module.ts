import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivosComponent } from './componentes/dispositivos/dispositivos.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { StartPageComponent } from './componentes/start-page/start-page.component';
import { EditarBoyaComponent } from './componentes/configuracion/editar-boya/editar-boya.component';
import { AgregarBoyaComponent } from './componentes/dispositivos/agregar-boya/agregar-boya.component';
import { RegistrarseComponent } from './componentes/login/registrarse/registrarse.component';
import { IniciarSesionComponent } from './componentes/login/iniciar-sesion/iniciar-sesion.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { ReporteBoyaComponent } from './componentes/reportes/reporte-boya/reporte-boya.component';
import { ImagenBoyaComponent } from './componentes/dispositivos/imagen-boya/imagen-boya.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleguardGuard } from './guards/roleguard.guard';

const routes: Routes = [
  {
    path: '',   component: StartPageComponent,

  },
  {
    path: 'start-page', component: StartPageComponent
  },
  {
    path: 'configuracion', component: ConfiguracionComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'dispositivos', component: DispositivosComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'editar-boya/:id', component: EditarBoyaComponent,
    canActivate: [RoleguardGuard]
  },
  {
    path: 'agregar-boya', component: AgregarBoyaComponent
  },
  {
    path: 'imagen-boya/:id', component: ImagenBoyaComponent
  },
  {
    path: 'registrarse', component: RegistrarseComponent
  },
  {
    path: 'iniciar-sesion', component: IniciarSesionComponent
  },
  {
    path: 'reportes', component: ReportesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reporte/:id/:fromDate/:toDate', component: ReporteBoyaComponent,
    canActivate: [AuthGuard]
  },
  // { path: '**', component: StartPageComponent },
  // { path: '',   redirectTo: 'start-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
