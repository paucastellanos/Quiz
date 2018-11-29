import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  home= HomePage;
  usuario={
    email: null,
    pass: null,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  goHome(){
    console.log(this.usuario.email+" "+ this.usuario.pass);
    if(this.usuario.email!=null&&this.usuario.pass!=null){
      this.navCtrl.push(this.home,this.usuario);
    }
    else{
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Contraseña no válida',
        buttons: [OK]
      });
      alert.present();
    }
  }
}
