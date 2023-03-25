import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncLocalStorage } from 'async_hooks';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.page.html',
  styleUrls: ['./addaddress.page.scss'],
})
export class AddaddressPage implements OnInit {
  uid:any
  data:any
  // logins:any

  constructor(public server:ServiceService ,public router:Router) { }

  ngOnInit() {
    

    this.viewaddress();
    
   
  }
  async viewaddress(){
    
   var arr={ 'uid' :localStorage.getItem('mobile')}
    this.server.addressview(arr).subscribe((response:any)=>{
      console.log(arr)
      this.data=response
      
    //  window.location.reload(); 
      console.log(response)

    })
  }

  
  

}
