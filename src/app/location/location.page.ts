import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var google;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  lat: number;
  long: number;

  constructor(private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
    this.loadMap();
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
 


}
