import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CaruselComponent } from '../components/carusel/carusel';
import { ConfigAppProvider } from './providers/config-app';
import { DatosTiendaComponent } from '../components/datos-tienda/datos-tienda';
import { TarjetaProductoComponent } from '../components/tarjeta-producto/tarjeta-producto';
import { DetalleProductoComponent } from '../components/detalle-producto/detalle-producto';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CaruselComponent,
    DatosTiendaComponent,
    TarjetaProductoComponent,
    DetalleProductoComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CaruselComponent,
    DatosTiendaComponent,
    TarjetaProductoComponent,
    DetalleProductoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigAppProvider,
  ]
})
export class AppModule {}
