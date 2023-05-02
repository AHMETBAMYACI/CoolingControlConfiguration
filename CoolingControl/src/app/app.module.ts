import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AppDeviceAddComponent, 
  AppDeviceListComponent,
  AppDeviceDetailComponent,
  AppLoginComponent,
  AppSettingComponent,
  AppSettingWifiComponent } from './components'


@NgModule({
  declarations: [
    AppComponent,
    AppDeviceAddComponent, 
    AppDeviceListComponent,
    AppDeviceDetailComponent,
    AppLoginComponent,
    AppSettingComponent,
    AppSettingWifiComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
