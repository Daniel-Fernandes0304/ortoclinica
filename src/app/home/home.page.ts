import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private storage: Storage,
    private router: Router
  ) {  }
    nomeUsuario: string | null = '';

    async ngOnInit(): Promise<void> {
      this.nomeUsuario = await this.storage.get('usuario');
      console.log(this.nomeUsuario);
    }

    async logoff(): Promise<void> {
      await this.storage.remove('usuario');
      await this.storage.remove('senha');
      this.router.navigate(['/login'], { replaceUrl: true});
    }
}
