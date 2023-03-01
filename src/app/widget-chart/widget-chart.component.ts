import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.css']
})
export class WidgetChartComponent {


  Highcharts=Highcharts
  chartOptions={}
  constructor()
  {
   this.chartOptions={
    chart: {
        type: 'area'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
        text: '' +
            '' +
            '',
        align: 'left'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June','July','August','September','October','November','December']
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '',
        data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7
        ]
    }]
}

  HC_exporting(Highcharts);
   } 
  
  
}

