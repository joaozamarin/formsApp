import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
  });

  mensagensErro = {
    email: [
      {tipo: 'required', aviso: 'Insira um E-mail!'},
      {tipo: 'email', aviso: 'Insira um E-mail válido!'}
    ],

    senha: [
      {tipo: 'required', aviso: 'Insira uma Senha!'},
      {tipo: 'minLength', aviso: 'A senha deve ter, no mínimo, 6 caracteres!'}
    ]
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
