import { Component, Input } from '@angular/core';
import { DayData } from '../types/dayData';

@Component({
  selector: 'app-day-data',
  templateUrl: './day-data.component.html',
  styleUrls: ['./day-data.component.css']
})
export class DayDataComponent {
  @Input()
  dayData: DayData;
}