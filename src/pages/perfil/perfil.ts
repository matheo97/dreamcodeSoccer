import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  appType = 'Paid';

  constructor(public navCtrl: NavController) {

  }

  apps: any = {
    'Paid': [
      {
        name: 'Monopoly',
        price: '$0.99'
      },
      {
        name: 'Angry Birds',
        price: '$2.99'
      }
    ],
    'Free': [
      {
        name: 'Snapchat',
        price: 'GET'
      },
      {
        name: 'Instagram',
        price: 'OPEN'
      }
    ],
    'Top': [
      {
        name: 'Spotify',
        price: 'OPEN'
      },
      {
        name: 'Pandora',
        price: 'GET'
      }
    ]
  };

  getItems(type: any) {
    return this.apps[type];
  }


}
