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

const routes: Routes = [
  { path: '',   component: StartPageComponent },
  {path: 'start-page', component: StartPageComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'dispositivos', component: DispositivosComponent},
  {path: 'editar-boya', component: EditarBoyaComponent},
  {path: 'editar-boya/:id', component: EditarBoyaComponent},
  {path: 'agregar-boya', component: AgregarBoyaComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'reporte/:id', component: ReporteBoyaComponent},
  // { path: '**', component: StartPageComponent },
  // { path: '',   redirectTo: 'start-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
