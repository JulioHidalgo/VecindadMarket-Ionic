import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  validationUserMessage = {
    email:[
      { type:"required", message:"Por favor ingrese su email"},
      { type:"required", message:"El Email ingresado es incorrecto, Intentelo otra vez por favor" }
    ],
    password:[
      { type:"required", message:"Por favor ingrese su contraseña"},
      { type:"minLength", message:"La contraseña debe tener 5 caracteres o más" }
    ]
  }

  validationFormUser: FormGroup;

  constructor(
    public formbuider: FormBuilder,
    private util: UtilService,
    private navCtrl: NavController, 
  ) {
   }

  ngOnInit() {
    this.validationFormUser = this.formbuider.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern ('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength (5)
      ])),
    });
  }

  LoginUser(value){
    console.log("Am logged in");
  }

  login() {
    // Enabling Side Menu
    this.util.setMenuState(true);
    this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
  }

}
