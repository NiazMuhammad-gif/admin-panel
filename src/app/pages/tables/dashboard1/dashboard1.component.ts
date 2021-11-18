import { Component, OnInit } from '@angular/core';
import { ChartType } from 'ng-apexcharts';
import { Chat, Stat, Transaction } from '../../dashboard/dashboard.model';
import { revenueChart, salesAnalytics, sparklineEarning, sparklineMonthly, chatData, transactions, statData } from '../../dashboard/data';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  term: any;
  chatData: Chat[];
  transactions: Transaction[];
  statData: Stat[];
  revenueChart: ChartType;
  salesAnalytics: ChartType;
  sparklineEarning: ChartType;
  sparklineMonthly: ChartType;
  constructor() { }

  ngOnInit(): void {
    this._fetchData();
  }
  private _fetchData() {
    this.revenueChart =<ChartType> revenueChart;
    this.salesAnalytics = <ChartType>salesAnalytics;
    this.sparklineEarning = <ChartType>sparklineEarning;
    this.sparklineMonthly = <ChartType>sparklineMonthly;
    this.chatData = chatData;
    this.transactions = transactions;
    this.statData = statData;
  }

}
