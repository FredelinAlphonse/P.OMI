import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarIdiomasPageRoutingModule } from './listar-idiomas-routing.module';

import { ListarIdiomasPage } from './listar-idiomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarIdiomasPageRoutingModule
  ],
  declarations: [ListarIdiomasPage]
})
export class ListarIdiomasPageModule {}
