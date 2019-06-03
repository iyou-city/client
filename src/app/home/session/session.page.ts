import { Router } from '@angular/router';
import { User } from '../../../sdk/user_pb';
import { Book, Page, Media } from '../../../sdk/book_pb';
import { Group } from '../../../sdk/group_pb';
import { Topic } from '../../../sdk/message_pb';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { apiService, utilService } from '../../service/api.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {
  host = environment.webUrl;
  books: Book.AsObject[] = [];
  levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  sliderConfig = {
    slidesPerView: 6,
    effect: 'flip'
  };

  constructor(private router: Router) { }

  tryCount = 0;

  ngOnInit() {
    let stream = apiService.bookClient.list((new Book), apiService.metaData);
    stream.on('data', response => {
      this.books.push(response.toObject());
    });
    stream.on('error', err => {
      //alert(JSON.stringify(err));
      if (this.tryCount <= 3) {
        this.ngOnInit();
      }
      this.tryCount++;
    });
  }

  gotoView(book: Book.AsObject) {
    utilService.book = book;
    this.router.navigateByUrl('view');
  }
}
