import { Router } from '@angular/router';
import { User } from '../../../sdk/user_pb';
import { Book } from '../../../sdk/book_pb';
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
    for (let i=0;i<5;i++){
      let book0 = (new Book).toObject()
      book0.title = '字母abc';
      book0.cover = 'http://192.168.123.121:8081/abc/cover.jpg';
      this.books[i] = book0;
    }
  }
}
