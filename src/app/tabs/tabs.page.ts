import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public loadingController:LoadingController) { }

  ngOnInit() {
  }
  async show(){
  const loading = await this.loadingController.create({//
    message: 'Please wait...',//
    mode: 'ios'//
     // spinner: 'dots'
  });
  }

}
