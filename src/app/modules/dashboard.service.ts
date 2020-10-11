import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  BigChart()
  {
    return[{
      name:'',
      data:[]
    },
    {
      name:'',
      data:[]
    },
    {
      name:'',
      data:[]
    }
  ];
  }
  PieChart()
  {
    return [['', 58.9],['', 41.1]]
  }
 
}
