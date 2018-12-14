import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the DetalleProductoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detalle-producto',
  templateUrl: 'detalle-producto.html'
})
export class DetalleProductoComponent {

  text: string;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello DetalleProductoComponent Component');
    this.text = 'Hello World';
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

      
  detalleproducto=[
    {
      imagen:'assets/imgs/frutas_verduras/banano.jpg',
      nombre : 'Banano criollo 6 Und',
      info : '900Gr',
      precio : '6.550',
      categoria:'Frutas y verduras',
      descuento: '-15%',
      carrito: '5'
    }
  ]

}
