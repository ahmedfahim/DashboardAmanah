import { Component, Input, OnInit, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions={}
  @Input() data:[]
  @Input() label:string
  @Input() value:string
  constructor() { }

  ngOnInit()
  {
    this.chartOptions= {
      chart: {
        plotBackgroundColor: '#f4f5f8',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'حالة الشوارع'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    }, exporting:{
      enabled:false
    },
    credits:{
      enabled:true,
      text:'PMMS.JEDDAH.GOV',
      href:'http://PMMS.JEDDAH.GOV.SA',
      position:{
      align:'right',
      verticalAlign:'bottom',
      x:-10,
      y:-5
      },
      style:{
      color:'#999999',
      cursor:'pointer',
      fontSize:'9px'
      }
      },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    
    series: [{
        name: 'P',
        colorByPoint: true,
        data: this.data
    }]
}
    HC_exporting(Highcharts);
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    },300);    
  }

}
