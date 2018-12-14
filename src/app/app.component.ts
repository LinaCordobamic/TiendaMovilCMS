import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ConfigAppProvider } from './providers/config-app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  private themeWrapper = document.querySelector('body');
  rootPage:any = TabsPage;
  @ViewChild(Nav) nav: Nav;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public event: Events, public configAppProvider: ConfigAppProvider) {
      this.globalOverride();
      console.log (
        this.themeWrapper
      )

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  
  
  globalOverride() {
  
    if (this.configAppProvider) {
      this.themeWrapper.style.setProperty('--colorPrimario',this.configAppProvider.
      configuracion.estilos.globalColorPrimario);
      this.themeWrapper.style.setProperty('--colorSecundario',this.configAppProvider.
      configuracion.estilos.globalColorSecundario);
      this.themeWrapper.style.setProperty('--fontFamily',this.configAppProvider.
      configuracion.estilos.globalFontFamily)
    }
  }

}
