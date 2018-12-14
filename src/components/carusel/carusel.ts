import { Component } from '@angular/core';
import { ConfigAppProvider } from '../../app/providers/config-app';




@Component({
  selector: 'carusel',
  templateUrl: 'carusel.html',
})
export class CaruselComponent {
  slides = [];

  constructor(private configAppProvider:ConfigAppProvider) {
  this.slides=this.configAppProvider.configuracion.slides;  
  }

}
