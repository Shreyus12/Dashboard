import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './widget-pie.component.html',
  styleUrls: ['./widget-pie.component.css']
})
export class WidgetPieComponent {

  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Goals'
        },
        xAxis: {
            categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Goals'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Cristiano Ronaldo',
            data: [4, 4, 6, 15, 12]
        }, {
            name: 'Lionel Messi',
            data: [5, 3, 12, 6, 11]
        }, {
            name: 'Robert Lewandowski',
            data: [5, 15, 8, 5, 8]
        }]
    }
  }
      
  }
    
  


