import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ServiceService } from '../../services/service.service';
import { NavController } from '@ionic/angular';
import { Button } from 'protractor';
import { ok } from 'assert';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {


  usernames: any
  uid: any

  passwordType: string = 'password';
  passwordShown: boolean = false

  constructor(public loadingController: LoadingController, public server: ServiceService, public routes: NavController, public alertController:AlertController) { }

  ngOnInit() {

  }
  public togglePassword()
  {
     if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password'
     }

     else {
       this.passwordShown =true;
       this.passwordType='text';
     }
  }
  async login(data) {

    let alert=await this.alertController.create({

      header:'Alert',
      message: 'Invalid Mobile Number Or Password',
      buttons: ['OK'],

    })
   


    this.server.login(data).subscribe((response: any) => {
      console.log(response);

      // this.usernames = localStorage.setItem('mobile', response.phno)
      this.uid = localStorage.setItem('mobile', response.id)
      localStorage.setItem("status","1")

      //alertController

      
      if (response == 0) {
        // alert('Invalid Username Or Password');
        // 
        alert.present();
        
      }
      else {
        // this.routes.navigateRoot('/tabs')
        location.href='/tabs';
       
        //

      
      
        //
      
      }
    })

   

   

    
  }

}


