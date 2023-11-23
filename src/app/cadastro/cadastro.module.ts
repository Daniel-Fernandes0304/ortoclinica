import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule, 
    CadastroRoutingModule, 
    IonicModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule 
  ]
})
export class CadastroModule { }