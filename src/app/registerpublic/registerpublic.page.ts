import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-registerpublic',
  templateUrl: './registerpublic.page.html',
  styleUrls: ['./registerpublic.page.scss'],
})
export class RegisterpublicPage implements OnInit {

  constructor(public server: ServiceService,public routes:NavController) { }

  ngOnInit() {
  }
  async register(data) {


    this.server.register(data).subscribe((response: any) => {
      // console.log('login')

      // this.routes.navigateRoot('adminhome')
    })
    this.routes.navigateRoot('/admin')

  }
 

}
