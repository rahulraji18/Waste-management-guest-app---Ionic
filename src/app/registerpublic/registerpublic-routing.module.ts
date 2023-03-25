import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterpublicPage } from './registerpublic.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterpublicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterpublicPageRoutingModule {}
