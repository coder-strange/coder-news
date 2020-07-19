import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-timeline',
  template: `
  <mat-card>
    <div style="display: block;">
      <canvas baseChart
        [datasets]="lineChartData"
        [labels]="lineChartLabels"
        [options]="lineChartOptions"
        [colors]="lineChartColors"
        [legend]="lineChartLegend"
        [chartType]="lineChartType"
        >
      </canvas>
    </div>
  </mat-card>

  `,
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnChanges {
  @Input() chartData: any;
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Vote Timeline' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#162f5d',
      backgroundColor: 'rgba(255,0,0,0)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  renderMap(): void{
    this.lineChartData[0].data = this.chartData ? Object.values(this.chartData).map((i: any) => +i.votes) : [];
    this.lineChartLabels = this.chartData ?  Object.keys(this.chartData) : [];
  }

  ngOnChanges(change: SimpleChanges){
    this.renderMap();
  }
}
