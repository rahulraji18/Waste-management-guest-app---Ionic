import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddaddressPage } from './addaddress.page';

const routes: Routes = [
  {
    path: '',
    component: AddaddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddaddressPageRoutingModule {}
