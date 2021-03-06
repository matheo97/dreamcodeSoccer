import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { RegistrarPage } from '../registrar/registrar';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }


  login(user:User){

    try{
      var result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);

      if(result){
        this.navCtrl.push(TabsPage);
      }
    }
    catch(e){
      console.log(e);
    }


  }

  register(){
    this.navCtrl.push(RegistrarPage);
  }

}
