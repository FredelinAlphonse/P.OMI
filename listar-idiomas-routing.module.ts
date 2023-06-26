import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarIdiomasPage } from './listar-idiomas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarIdiomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarIdiomasPageRoutingModule {}
