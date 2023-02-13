import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup
  constructor() {
    const controles: any = {
      correo: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(8)]),
    }
    this.formularioLogin = new FormGroup(controles)

   }

  ngOnInit() {
    console.log('ngOnInit login');
  }
  login(){
    console.log(this.formularioLogin);
  }
  getFormStatus(){
    return this.formularioLogin.valid ? 'btn btn-primary' : 'btn btn-secondary'
  }
}
