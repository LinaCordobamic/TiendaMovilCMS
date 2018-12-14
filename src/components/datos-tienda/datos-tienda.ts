import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the DatosTiendaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'datos-tienda',
  templateUrl: 'datos-tienda.html'
})
export class DatosTiendaComponent {

  text: string;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello DatosTiendaComponent Component');
    this.text = 'Hello World';
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
