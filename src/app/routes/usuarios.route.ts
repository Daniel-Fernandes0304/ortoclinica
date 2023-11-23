import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})
export class UsuariosRoute {
    constructor(
        private http: HttpClient,
        private storage: Storage
        ) {}

        private apiUrl = 'http://10.91.228.11:3000';

    public async getToken(): Promise<string> {
        const usuario = JSON.parse(await this.storage.get('currentUser'));
        return 'Bearer' + (usuario ? usuario.token : '');
    }

    public getHeader(): { headers: HttpHeaders } {
        return {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        };
    }

    public login = async (body: any) => {
        this.http.post(`${this.apiUrl}/tp01/usuarios/login`, body).toPromise()
        .then(teste => console.log(teste)).catch(
            erro => console.log(erro)
         )
    }
}
