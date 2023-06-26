import { Component,SimpleChange,OnInit,ViewChild,Input   } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseServiceService } from '../firebase-service.service';
import { NgModule } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
profile= null;
   public registro;
   public users;
   public documentos;
   public usuario;
   public idAlteracao;

@ViewChild('users', {static: true}) email;
@ViewChild('users', {static: true}) senha;

  constructor(private firebaseServiceService:FirebaseServiceService,
    private router:Router, private alertController: AlertController,
    private loadinController: LoadingController) {}

    ngOnInit() {
      
      
    }
    public selecionarUsuario(uid) {
      this.email.value = uid.email;
      this.senha.value = uid.senha;
      this.idAlteracao = uid.id;
    }
    
  public async adicionarLogin(email, senha) {
    await this.firebaseServiceService.adicionarUsuario(email.value, senha.value);
  }
  public adicionarUsuario(){
    this.adicionarUsuario = null;
    
  }

  public async excluirUsuario(idUsuario) {
    await this.firebaseServiceService.removerUsuario(idUsuario);
  }

  public alterarUsuario(email, senha ) {
    this.firebaseServiceService.alterarUsuario(this.idAlteracao, email.value, senha.value);
    this.cancelarAlteracao();
  }
  cancelarAlteracao() {
  this.idAlteracao = null;
  this.email.value = '';
    this.senha.value = '';
  }
  
}

