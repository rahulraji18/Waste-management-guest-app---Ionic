import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/services/service.service';

declare var google;

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  lat: number;
  long: number;

  uid:any
  data:any

  constructor(private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,public server:ServiceService, public nav:NavController, public alert: AlertController, public router:Router) { }

  ngOnInit() {
    this.loadMap();
    //this.saveAddress(this.data);
   
  }
  loadMap() {
   // this.autocompleteItems = [];
   //FIRST GET THE LOCATION FROM THE DEVICE.
   this.geolocation.getCurrentPosition().then((resp) => {
 //alert(resp.coords.latitude);
  
     this.lat=resp.coords.latitude;
      this.long=resp.coords.longitude; 
     
     let latLng = new google.maps.LatLng(this.lat, this.long);
     let mapOptions = {
       center: latLng,
       zoom: 18,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     } 
     
   this.getAddressFromCoords(this.lat, this.long); 
     //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 
     this.map.addListener('tilesloaded', () => {
    this.lat=this.map.center.lat();
       this.long=this.map.center.lng();
       this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
     });
   }).catch((error) => {
     console.log('Error getting location', error);
   //alert(error);
   });
 }
getAddressFromCoords(lattitude, longitude) {
   console.log("getAddressFromCoords "+lattitude+" "+longitude);
   let options: NativeGeocoderOptions = {
     useLocale: true,
     maxResults: 5    
   }; 
   this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
     .then((result: NativeGeocoderResult[]) => {
       this.address = "";
       let responseAddress = [];
       for (let [key, value] of Object.entries(result[0])) {
         if(value.length>0)
         responseAddress.push(value); 
       }
       responseAddress.reverse();
       for (let value of responseAddress) {
         this.address += value+", ";
       }
       this.address = this.address.slice(0, -2);
     })
     .catch((error: any) =>{ 
       this.address = "Address Not Available!";
     }); 
 }
 async saveAddress(data)
 {

  //alert controller
  var Alert= await this.alert.create({
    header:"Alert",
    message: "Added",
    mode: "ios"
  })
  //
  this.uid = localStorage.getItem('mobile')
  console.log(this.uid)
  data['lat']=this.lat;
  data['long']=this.long;
  data['uid']=this.uid;
   
this.server.addaddress(data).subscribe((response:any)=>{

  

})

this.nav.navigateRoot('/addaddress')
// this.router.navigateByUrl('/addaddress');
await Alert.present();

console.log(data)

 }


 
}





