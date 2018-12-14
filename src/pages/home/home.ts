import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { DatosTiendaComponent } from '../../components/datos-tienda/datos-tienda';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController) { }


  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(DatosTiendaComponent);
    popover.present({
      ev: myEvent
    });
  }
 

}
