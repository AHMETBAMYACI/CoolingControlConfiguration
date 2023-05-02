import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppDeviceAddComponent, 
  AppDeviceListComponent,
  AppDeviceDetailComponent,
  AppLoginComponent,
  AppSettingComponent,
  AppSettingWifiComponent } from './components'

const routes: Routes = [ 
  { path: 'login', component: AppLoginComponent },
  { path: 'add', component: AppDeviceAddComponent },
  { path: 'list', component: AppDeviceListComponent },
  { path: 'detail', component: AppDeviceDetailComponent },
  { path: 'setting', component: AppSettingComponent },
  { path: 'wifi-setting', component: AppSettingWifiComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
