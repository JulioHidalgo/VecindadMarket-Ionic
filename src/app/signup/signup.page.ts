import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
   selector: 'app-signup',
   templateUrl: './signup.page.html',
   styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  eyeStatus: boolean = true;
  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl:NavController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
    /*
    if(localStorage.getItem('ingresado'))
    {
      this.navCtrl.navigateRoot('home');
    }
    */
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
          //Funcionalidades sólo para utilizar con guard
          localStorage.setItem('ingresado','true');
          this.navCtrl.navigateRoot('home');
  }

  toggleEye() {
    this.eyeStatus = !this.eyeStatus;
  }
}
