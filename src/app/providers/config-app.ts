import { Injectable } from '@angular/core';


@Injectable()
export class ConfigAppProvider {

configuracion:any;



    constructor() { 

    this.configuracion={
        estilos: {
            globalFontFamily: 'Open Sans',
            globalColorPrimario: '#06ce65',
            globalColorSecundario: '#ff7610'
            },

        slides: [
            {
              imageUrl: 'https://biotrendies.com/wp-content/uploads/2018/01/alimentos-ricos-en-minerales.jpg',
            },
            {
              imageUrl: 'https://biotrendies.com/wp-content/uploads/2018/01/alimentos-ricos-en-minerales.jpg',
            },
          ]
        }

    }

}