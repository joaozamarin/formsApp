import { Usuario } from './../models/Usuario.model';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listaUsuarios: Usuario[] = [];

  constructor(private storageService: StorageService) { }

  async salvar() {}

  async buscarUm() {}

  async buscarTodos() {}

  async deletar() {}

  async salvarId(id: number) {
    await this.storageService.set('IdUsuario', id);
  }

  async buscarId() {
    const id = await this.storageService.get('idUsuario');

    if(!id) {
      return 0;
    }

    return id;
  }


}
