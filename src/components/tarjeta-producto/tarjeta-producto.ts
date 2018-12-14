import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';
import { DetalleProductoComponent } from '../../components/detalle-producto/detalle-producto';


/**
 * Generated class for the TarjetaProductoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tarjeta-producto',
  templateUrl: 'tarjeta-producto.html'
})
export class TarjetaProductoComponent {

  text: string;

  constructor( public modalCtrl: ModalController) {
    console.log('Hello TarjetaProductoComponent Component');
    this.text = 'Hello World';
  }

  
  openModal() {
    const modal = this.modalCtrl.create(DetalleProductoComponent);
    modal.present();
  }


  listaproductos=[
    {
      imagen:'assets/imgs/frutas_verduras/aguacate.jpg',
      nombre : 'Aguacate Hass 5 Und',
      info : '900Gr',
      precio : '6.550',
      descuento: '-15%',
      carrito: '5'
    },
    {
      imagen:'assets/imgs/frutas_verduras/banano.jpg',
      nombre : 'Banano criollo 6 Und',
      info : '1kg',
      precio : '2.601',
    },

    {
      imagen:'assets/imgs/frutas_verduras/cebolla_larga.jpg',
      nombre : 'Cebolla larga',
      info : '500Gr',
      precio : '1.701',
      carrito: '2'
    },

      {
      imagen:'assets/imgs/frutas_verduras/coco.jpg',
      nombre : 'Coco Und',
      info : '900Gr',
      precio : '5.661',
      descuento: '-10%'
    },

    {
      imagen:'assets/imgs/frutas_verduras/coliflor.jpg',
      nombre : 'Coliflor Und',
      info : '1Kg',
      precio : '3.591',
    },

    {
      imagen:'assets/imgs/frutas_verduras/espinaca.jpg',
      nombre : 'Espinaca hojas',
      info : '300Gr',
      precio : '2.151',
      carrito: '2'
    },

    {
      imagen:'assets/imgs/frutas_verduras/mango.png',
      nombre : 'Mango Und',
      info : '800Gr',
      precio : '2.511',
      descuento: '-15%',
    },

    
    {
      imagen:'assets/imgs/frutas_verduras/manzanas.png',
      nombre : 'Manzana verde 6 Und',
      info : '900Gr',
      precio : '6.381',
    },

    {
      imagen:'assets/imgs/frutas_verduras/mazorca.jpg',
      nombre : 'Mazorca bandeja 3 Und',
      info : '900Gr',
      precio : '5.751',
    },

    {
      imagen:'assets/imgs/frutas_verduras/patilla.jpg',
      nombre : 'Sandía Baby',
      info : '2Kg',
      precio : '5.391',
    },

    {
      imagen:'assets/imgs/frutas_verduras/peras.png',
      nombre : 'Pera 6 Und',
      info : '900Gr',
      precio : '5.931',
    },

    {
      imagen:'assets/imgs/frutas_verduras/perejil.png',
      nombre : 'Perejil',
      info : '100Gr',
      precio : '1.341',
      descuento: '-15%',
    },

    {
      imagen:'assets/imgs/frutas_verduras/pina.png',
      nombre : 'Piña Und',
      info : '1.5Kg',
      precio : '4.941',
    },

    {
      imagen:'assets/imgs/frutas_verduras/platano_verde.png',
      nombre : 'Plátano verde 3 Und',
      info : '1.5Kg',
      precio : '3.861',
      descuento: '-15%',
    },

    {
      imagen:'assets/imgs/frutas_verduras/tomate.jpg',
      nombre : 'Tomate larga vida',
      info : '1.5Kg',
      precio : '3.771',
    },

  ]

}
