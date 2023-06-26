import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEmpregosPageRoutingModule } from './listar-empregos-routing.module';

import { ListarEmpregosPage } from './listar-empregos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEmpregosPageRoutingModule
  ],
  declarations: [ListarEmpregosPage]
})
export class ListarEmpregosPageModule {}
