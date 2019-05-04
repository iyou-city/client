import { Router } from '@angular/router';
import { User } from '../../../sdk/user_pb';
import { Book, Page } from '../../../sdk/book_pb';
import { Group } from '../../../sdk/group_pb';
import { Topic } from '../../../sdk/message_pb';
import { Component, OnInit } from '@angular/core';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { apiService, utilService } from '../../service/api.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {
  //msgCache = utilService.msgCache;
  books: Book.AsObject[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      let book0 = new Book();
      book0.setTitle('字母abc');
      book0.setCover('http://192.168.123.121:8081/abc/cover.jpg');

      let page0 = new Page();
      page0.setName('a');
      page0.setPicture('http://192.168.123.121:8081/abc/' + page0.getName() + '.png');
      book0.addPage(page0);

      let page1 = new Page();
      page1.setName('b');
      page1.setPicture('http://192.168.123.121:8081/abc/' + page1.getName() + '.png');
      book0.addPage(page1);

      let page2 = new Page();
      page2.setName('c');
      page2.setPicture('http://192.168.123.121:8081/abc/' + page2.getName() + '.png');
      book0.addPage(page2);

      this.books[i] = book0.toObject();
    }
  }

  gotoView(book: Book.AsObject) {
    utilService.book = book;
    this.router.navigateByUrl('view');
  }
}
