import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApoiotrabalhoPageRoutingModule } from './apoiotrabalho-routing.module';

import { ApoiotrabalhoPage } from './apoiotrabalho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApoiotrabalhoPageRoutingModule
  ],
  declarations: [ApoiotrabalhoPage]
})
export class ApoiotrabalhoPageModule {}
