import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CommentsData } from './types/commentsData';
import { DayData } from './types/dayData';

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get<CommentsData>('./assets/mock-data.json');
  }

  transformData(data: CommentsData): DayData[] {

    const comments = data.comments;
    const users = data.users;

    const findByUserName = username => {
      return users.find(user => {
        return user.username === username;
      });
    };

    comments.forEach(comment => {
      comment.fullName = findByUserName(comment.username).fullName;

      let date = new Date(comment.time);

      comment.date = date.toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric'
      }).replace(/,/, '');

      comment.daytime = date.toLocaleTimeString('en-US');
    });

    const groupedComments = {};
    comments.forEach(comment => {
      const date = comment.date;
      if (groupedComments[date] === undefined) {
        groupedComments[date] = [];
      }
      groupedComments[date].push(comment);
    });

    const dayDataArr: DayData[] = [];
    Object.keys(groupedComments).forEach(date => {
      dayDataArr.push({
        date,
        comments: groupedComments[date]
      });
    });

    return dayDataArr;
  }

}
