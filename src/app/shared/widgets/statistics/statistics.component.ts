import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-stat',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor() { }
  piechart1 =[['',72613437.02],['', 320000000]];
  pieStatusdata=[{
    name: 'ممتاز',
    y: 61.41,
    sliced: true,
    selected: true,
    color:'Green'
}, {
    name: 'جيد',
    y: 11.84,
    color:'blue'
}, {
    name: 'لا بأس به',
    y: 10.85,
    color:'Yellow'
}, {
    name: 'ضعيف',
    y: 4.67,
    color:'red'
}];
  ngOnInit(): void {
  }

}
