import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApoiotrabalhoPage } from './apoiotrabalho.page';

const routes: Routes = [
  {
    path: '',
    component: ApoiotrabalhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApoiotrabalhoPageRoutingModule {}
