import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  uid:any
  data:any
  id:any
  constructor(public server:ServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.id = params.id;
        console.log(this.id);
      });
      this.details();
  }
  async details()
  {
    var arr = {'complaintid':this.id}
    // 'uid': localStorage.getItem('mobile')
    this.server.reportDetails(arr).subscribe((response:any)=> {
     
      // console.log(cid)

      this.data=response
      console.log(this.data)
      console.log(response)
      console.log(response[0].status)

    })
  }

}
