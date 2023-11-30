import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { UsuariosRoute } from '../routes/usuarios.route';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private storage: Storage,
    private router: Router,
    private usuarioRoute: UsuariosRoute
  ) {  }

    nomeUsuario: string | null = '';
    usuario: any | null = null;
    medicos: any;

    async ngOnInit(): Promise<void> {
      this.usuario = await this.storage.get('usuario');
      this.nomeUsuario = this.usuario['nome'];
      console.log(this.nomeUsuario);
    }

    getMedicos(): void {
      this.medicos = this.usuarioRoute.getMedicos();
      console.log(this.medicos)
    }

    async logoff(): Promise<void> {
      await this.storage.remove('usuario');
      await this.storage.remove('senha');
      this.router.navigate(['/login'], { replaceUrl: true});
    }
}
