import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  alert:any
  constructor(public routes:NavController, public alertController:AlertController) { }

  ngOnInit() {
  }
  async newpassword(){
    this.alert=await this.alertController.create({
        header: 'Alert',
        message: 'Successfully Updated'
    })
    this.routes.navigateRoot('/admin')
    await this.alert.present();
  }

}
