import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigChart=[];
  piechart1 =[['',72613437.02],['', 320000000]];
  piechart2 =[['',7774.66],['', 32000]];
  piechart3 =[['', 56747],['', 40000]];
  piechart4=[['', 7488.06],['', 32000]];
  
  cards=[502, 635, 809, 947, 1402, 3634, 5268]
  
  label= ["أعمال المسح الميداني","استوائية سطح الطريق","قياسات الحمل الساقط(نقطة)","مقاومة الانزلاق"];
  value=["م2","كلم/حارة","نقطة","كلم/حارة"];
  constructor(private dashboardService:DashboardService) { }

  ngOnInit()
  {
    this.bigChart = this.dashboardService.BigChart();
    //this.piechart1 = this.dashboardService.PieChart();
  }
}
