import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DayDataComponent } from './day-data/day-data.component';
import { CommentComponent } from './comment/comment.component';

import { CommentsService } from './comments.service';

@NgModule({
  declarations: [
    AppComponent,
    DayDataComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
