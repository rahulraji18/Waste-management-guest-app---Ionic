import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(public routes:NavController) { }

  ngOnInit() {
  }
  async otp(){
    this.routes.navigateRoot('/newpassword')
  }

}
