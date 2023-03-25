import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.page.html',
  styleUrls: ['./newpassword.page.scss'],
})
export class NewpasswordPage implements OnInit {
  uid:any;
  data:any
  constructor(public server:ServiceService) { }

 
  ngOnInit() {
  }
  passwordType: string = 'password';
  passwordIcon: string = 'eye-outline';
 
  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }

  async newpassword(data){

    if(data.password==data.newpass){


    this.uid = localStorage.getItem('mobile')
    var arr = { 'uid': this.uid, 'password':data.password,'newpassword':data.newpass }
    this.server.newPassword(arr).subscribe((response:any)=> {
      if(response==0){
        alert('invalid password')
      }
      else{
        alert('successfully')
      }
      console.log(response)

    })
  
  }
  else{
    alert("does not match your password")
  }
  }
}
