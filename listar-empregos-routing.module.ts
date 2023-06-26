import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEmpregosPage } from './listar-empregos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEmpregosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEmpregosPageRoutingModule {}
