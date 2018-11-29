import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  registro= RegistroPage;
  usuarios=[];
  temp={
    email:"",
    pass:""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public alertCtrl: AlertController,
    public storage: Storage) {
      console.log(this.navParams.get('email'));
      this.usuarios.push(
        {
          email:this.navParams.get('email'),
          pass: this.navParams.get('pass')
        }
      );

      this.storage.set('usuarios2', JSON.stringify(this.usuarios));
      this.storage.keys()
      .then(keys=>{
        if (keys.some(key=> key == 'usuarios2')){
          console.log ("yes");
          this.storage.get('usuarios2')
          .then(usuarios =>{
            this.usuarios = JSON.parse(usuarios);
          });
        }
      });
      console.log(this.usuarios[0].email+" "+this.usuarios[0].pass);
    }

    registrar()
    {
      this.navCtrl.push(this.registro);
    }

    login()
    {
      console.log(this.temp.email);
      console.log(this.temp.pass);
      let index= this.usuarios.findIndex(usuario=>usuario.email==this.temp.email
        && usuario.pass == this.temp.pass);
        console.log(index);
        if (index=>0){
          const alert= this.alertCtrl.create({
            title: 'Oops!',
            subTitle: 'El usuario no existe',
            buttons: ['OK']
          });
          alert.present();
        }
    }
  }

