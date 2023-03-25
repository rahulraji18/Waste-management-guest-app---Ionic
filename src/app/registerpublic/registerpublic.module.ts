import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterpublicPageRoutingModule } from './registerpublic-routing.module';

import { RegisterpublicPage } from './registerpublic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterpublicPageRoutingModule
  ],
  declarations: [RegisterpublicPage]
})
export class RegisterpublicPageModule {}
