import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  Status = localStorage.getItem("status" )
  public appPages = [
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },

    // { title: 'Login', url: '/admin', icon: 'person' },
    // { title: 'Registration', url: '/registerpublic', icon: 'man' },
    // { title: 'Add Address', url: '/addaddress', icon: 'home' },
    // { title: 'Complaints', url: '/complaint', icon: 'people' },
    // { title: 'Location', url: '/location', icon: 'location' },
    // { title: 'Report', url: '/report', icon: 'document' },
    // { title: 'Change Password', url: '/newpassword', icon: 'lock-closed' },
    

    
  ];

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public nav:NavController) { }

  async login(){
    localStorage.setItem("status", "1");
    this.nav.navigateForward("/admin")
  }
  async logout(){

    localStorage.setItem("status","0")
    this.nav.navigateForward("/admin")

  }
  async addAddress(){
    this.nav.navigateForward('/addaddress')
  }
  async complaint(){
    this.nav.navigateForward('/complaint')
  }
  async report(){
    this.nav.navigateForward('/report');
  }
  async changepassword(){
    this.nav.navigateForward('/newpassword');
  }
}
