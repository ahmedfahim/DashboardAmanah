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
          text: ' عدد المناطق الممسوحة /البلدية'
      },
      subtitle: {
          text: ''
      },
      exporting:{
        enabled:false
      },

      xAxis: {
          categories: ['المسحة الأولى','المسحة الثانية'],
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
          name: 'أبحر',
          data: [172, 170]
      }, {
          name: 'أبحر الشمالية',
          data: [85, 90]
      }, {
          name: 'الصفا',
          data: [79, 203]
      }, {
          name: 'الجنوب',
          data: [75, 61]
      }, {
          name: 'البلد',
          data: [38, 2]
      },
      {
        name: 'جدة الجديدة',
        data: [69, 69]
    },
    {
        name: 'جدة التاريخية',
        data: [3, 0]
    }, {
        name: 'العزيزية',
        data: [99, 96]
    }, {
        name: 'الشرفية',
        data: [47, 11]
    }, {
        name: 'أم السلم',
        data: [47, 2]
    }, {
        name: 'بريمان',
        data: [47,45]
    }, {
        name: 'ذهبان',
        data: [39, 29]
    }, {
        name: 'طيبة',
        data: [74, 95]
    }, {
        name: 'المليساء',
        data: [55,36]
    }, {
        name: 'ثول',
        data: [10, 2]
    },
    {
        name: 'المطار',
        data: [66, 65]
    },
    {
        name: 'أبرق الرغامة',
        data: [19,19]
    },
    {
        name: 'الجامعة',
        data: [48, 48]
    },
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
