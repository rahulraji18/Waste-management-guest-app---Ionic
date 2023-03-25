import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  constructor(private routes:NavController) { }

  ngOnInit() {
  }
  async forgot(){

    this.routes.navigateRoot('/otp')

  }

}
