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
    color:'#009933'
},
{
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
pieStatusdata2=[{
  name: 'الجنوب',
  y: 14.7,
  sliced: true,
  selected: true
},
{
  name: 'طيبة',
  y: 15.7
}, {
  name: 'أبحر',
  y: 17.08
}, {
  name: 'الجامعة',
  y: 6.3
}
, {
  name: 'الصفا',
  y:7.8
}, {
  name: 'العزيزية',
  y: 7.8
}, {
  name: 'المطار',
  y: 6.7
}, {
  name: 'بريمان',
  y: 5.5
}
];
  ngOnInit(): void {
  }

}
