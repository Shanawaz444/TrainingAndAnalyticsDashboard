import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
@Component({
  selector: 'app-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.css']
})
export class PieGraphComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    
  };
  public pieChartLabels: Label[] = [['absent%'], ['present%'], 'partial%'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}
