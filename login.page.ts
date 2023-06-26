import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;
  fireAuth: any;

 //public fireAuth: firebase.auth.Auth;

  constructor( private router: Router) { }

 

    loginFirebaseUsuarios(email: string, password: string){
        return this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
            console.log('signInWithEmailAndPassword', email, password);
        }).catch((error)=> {
            console.error('Error signInWithEmailAndPassword', email, password, error.name, error.message);
            throw new Error(error.message);
        });
    }
  ngOnInit() {
  }
public async login(
  email, senha){

   /* this.firebaseService.login(email,senha).catch(error => {
      console.log(error);
    })*/
 try{
  await this.firebaseService.login(email,senha);
  this.router.navigateByUrl('home');
   }catch(e){ 
  console.log(e);
 }
}

}

