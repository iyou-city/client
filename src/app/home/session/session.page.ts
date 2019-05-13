import { Router } from '@angular/router';
import { User } from '../../../sdk/user_pb';
import { Book, Page, Media } from '../../../sdk/book_pb';
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
  host = utilService.host;
  books: Book.AsObject[] = [];
  levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  sliderConfig = {
    slidesPerView: 6,
    effect: 'flip'
  };

  constructor(private router: Router) { }

  ngOnInit() {
    let stream = apiService.bookClient.list((new Book), apiService.metaData);
    stream.on('data', response => {
      this.books.push(response.toObject());
    });
    stream.on('error', err => {
      alert(JSON.stringify(err));
      //this.loadGroups();
    });
    // for (let i = 0; i < 5; i++) {
    //   let book = new Book();
    //   book.setTitle('字母abc');
    //   let cover = new Media();
    //   cover.setUrl(utilService.host + '/abc/cover.jpg');
    //   book.setCover(cover);
    //   for (let j of ['a', 'b', 'c']) {
    //     let page = new Page();
    //     page.setName(j);
    //     let picture = new Media();
    //     picture.setUrl(utilService.host + '/abc/' + page.getName() + '.png');
    //     page.setPicture(picture);

    //     let sound = new Media();
    //     sound.setUrl(utilService.host + '/abc/' + page.getName() + '.mp3');
    //     page.setSound(sound);
    //     book.addPage(page);
    //   }
    //   this.books.push(book.toObject());
    // }
  }

  gotoView(book: Book.AsObject) {
    utilService.book = book;
    this.router.navigateByUrl('view');
  }
}
