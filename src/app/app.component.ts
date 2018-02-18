import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

import { DayData } from './types/dayData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;
  data: DayData[];

  constructor(
    private commentsService: CommentsService
  ) {}

  ngOnInit() {
    this.getCommentsArray();
  }

  getCommentsArray() {
    this.commentsService.getComments().subscribe(
      data => {
        this.data = this.commentsService.transformData(data);
        this.title = `${data.comments.length} comments`
      }
    )
  }

}
