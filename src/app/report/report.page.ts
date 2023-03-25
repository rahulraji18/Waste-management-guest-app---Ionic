import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  data: any;
  
  constructor(public server: ServiceService) { }

  ngOnInit() {
  }
  async report(datas) {

  
    var arr = { 'user': localStorage.getItem('mobile'), 'fromdate': datas.fromdate, 'todate': datas.todate }
    
    // console.log(arr)
    this.server.report(arr).subscribe((response: any) => {
    
    // console.log(response)
      console.log(response)
      this.data = response;
      console.log(this.data)

    })

  }
}
