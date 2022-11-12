import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro = this.formBuilder.group({
    nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    email: ['', Validators.compose([Validators.required ,Validators.email, Validators.minLength(6)])],
    cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
    senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });

  mensagensErro = {
    nome: [
      {tipo: 'required', aviso: 'Insira um Nome!'},
      {tipo: 'minLength', aviso: 'O nome deve ter, no mínimo, 3 caracteres'}
    ],

    email: [
      {tipo: 'required', aviso: 'Insira um E-mail!'},
      {tipo: 'email', aviso: 'Insura um E-mail válido!'}
    ],

    cpf: [
      {tipo: 'required', aviso: 'Insira um CPF!'},
      {tipo: 'minLength', aviso: 'Insira um CPF válido!'},
      {tipo: 'maxLength', aviso: 'Insira um CPF válido!'}
    ],

    senha: [
      {tipo: 'required', aviso: 'Insira uma senha!'},
      {tipo: 'minLength', aviso: 'A senha deve conter, no mínimo, 6 caracteres!'}
    ],

    confirmaSenha: [
      {tipo: 'required', aviso: 'Insira uma senha!'},
      {tipo: 'minLength', aviso: 'A senha deve conter, no mínimo, 6 caracteres!'}
    ]
  };

  constructor(private formBuilder: FormBuilder) { }

  get nome()
  {
    return this.formRegistro.get('nome');
  }

  ngOnInit() {
  }

}
