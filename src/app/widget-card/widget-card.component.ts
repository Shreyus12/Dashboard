import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.css']
})
export class WidgetCardComponent {

  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
          chart: {
              type: 'pie'
          },
          series: [{
              name: '',
              data: [{
                  name: '',
                  y: 70.67,
                  selected: true
              }, {
                  name: '',
                  y: 14.77
              },  {
                  name: '',
                  y: 4.86
              }, {
                  name: '',
                  y: 2.63
              }, {
                  name: ' ',
                  y: 1.53
              },  {
                  name: '',
                  y: 1.40
              }, {
                  name: '',
                  y: 0.84
              }, {
                  name: '',
                  y: 0.51
              }, {
                  name: '',
                  y: 2.6
              }]
          }]
      }
      }
      

  

  

  


}
