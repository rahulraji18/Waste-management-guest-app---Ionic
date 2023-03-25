import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServiceService } from '../../services/service.service';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.page.html',
  styleUrls: ['./complaint.page.scss'],
})
export class ComplaintPage implements OnInit {

  uid: any
  data:any
  constructor(public server: ServiceService, public alert: AlertController, public nav: NavController) { }

  ngOnInit() {
    this.address()
  }
  async complaint(data) {
    var alert = await this.alert.create({
      header: 'Alert !',
      message: 'Succefully Registered',
      mode: 'ios'
    })
    this.uid = localStorage.getItem('mobile')
    console.log(data)
    var arr = { 'uid': this.uid, data }
    this.server.complaint(arr).subscribe((response: any) => {
      console.log(arr)
      // console.log('login')

      // this.routes.navigateRoot('adminhome')
    })
    await alert.present();
    this.nav.navigateRoot('/report')
    alert.dismiss();
  }
  async address()
  {
    var arr={'uid': localStorage.getItem('mobile')}
    this.server.addressview(arr).subscribe((response:any)=>{
      // console.log(arr)
      this.data=response;
      console.log(response);

    })
  }

}
