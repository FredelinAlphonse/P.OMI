import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-listar-empregos',
  templateUrl: './listar-empregos.page.html',
  styleUrls: ['./listar-empregos.page.scss'],
})
export class ListarEmpregosPage implements OnInit {

  constructor(private firebase:FirebaseServiceService) { }

  ngOnInit() {
  }

  public editarEmprogo(emp) {
    this.firebaseServiceService();
    console.log(emp);
  }
  firebaseServiceService() {
    throw new Error('Method not implemented.');
  }


}
