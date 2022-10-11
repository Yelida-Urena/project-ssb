import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DevicesComponent } from './devices/devices.component';
import { FormsComponent } from './forms/forms.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ReportsComponent } from './reports/reports.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  {path: 'menu-bar', component: MenuBarComponent},
  {path: 'start-page', component: StartPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'devices', component: DevicesComponent},
  { path: '**', component: StartPageComponent },
  { path: '',   redirectTo: '/start-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
