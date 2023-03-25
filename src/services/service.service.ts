import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'https://garbage.projectlogi.club/admin/'
  //  url = 'http://localhost/projectlogi/admin/'
  constructor(private http: HttpClient) { }

  register(data) {

    return this.http.post(this.url + '/api/registerpublic/', data)
      .pipe(map(results => results));

  }
  login(data) {

    return this.http.post(this.url + '/api/login/', data)
      .pipe(map(results => results));

  }
  complaint(data) {

    return this.http.post(this.url + '/api/complaint/', data)
      .pipe(map(results => results));

  }
  report(data) {
    // console.log(data)
    return this.http.post(this.url + 'api/userreport', data)
      .pipe(map(results => results))
      
  }
  reportDetails(data){
    // console.log(data)
    return this.http.post(this.url +'api/workdetails',data)
    .pipe(map(results => results))
  }
  addaddress(data)
  {
    return this.http.post(this.url+'api/addaddress',data)
  }
  addressview(id){
    return this.http.post(this.url+'api/viewaddress', id)
    .pipe(map(results => results))
  }

  newPassword(arr){
    return this.http.post(this.url+'api/changepassword',arr)
  }
  // address(id){
  //   return this.http.post(this.url+'', id)
  //   .pipe(map(results=> results))
  // }
}
