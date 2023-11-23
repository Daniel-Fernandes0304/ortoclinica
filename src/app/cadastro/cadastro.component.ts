import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCoffee, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {

  formulario:FormGroup;
  formularioValido = true;

  constructor(private formBuilder:FormBuilder, private router: Router) {
    this.formulario= this.formBuilder.group({
      'nome': ['', Validators.required],
      'email': ['', Validators.required],
      'data': ['', Validators.required],
      'senha': ['', Validators.required]
    });
   }

   validarForm () {
    this.formularioValido = this.formulario.valid;
   if (this.formulario.valid) {
    const dados = this.formulario.value;
    console.log('Dados do formulario', dados);
    this.router.navigate(['/home']);
      }
   }
  
}