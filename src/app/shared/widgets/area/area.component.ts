import { Component, Input, OnInit } from '@angular/core';
import * as highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import HC_exporting from 'highcharts/modules/exporting'
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions:{};
  highcharts =highcharts;
  @Input() data:[];
  constructor() { }

  ngOnInit() {
    this.chartOptions= {
      chart: {
          type: 'column',
      },
      title: {
          text: ' إجمالي مصاريف صيانة الطرق/ريال'
      },
      subtitle: {
          text: ''
      },
      exporting:{
        enabled:false
      },

      xAxis: {
          categories: ['مليون ريال'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: ''
          },
          labels: {
              formatter: function () {
                  return this.value;
              }
          }
      },
      tooltip: {
          split:false,
          valueSuffix: ' '
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'ضعيف',
          data: [33172840],
          color:'red'
      }, {
          name: 'لا بأس به ',
          data: [58708669],
          color:'yellow'

      }, {
          name: 'جيد',
          data: [51819682],
          color:'blue'
      },      {
        name: 'ممتاز',
        data: [83705310],
        color:'green'
    }
    ]
    
  
    } 
    HC_exporting(highcharts);
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    },300);         
  }

}
