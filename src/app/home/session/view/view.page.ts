import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book, Page } from '../../../../sdk/book_pb';
import { apiService, utilService } from '../../../service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  host = utilService.host;
  book: Book.AsObject;
  slideOpts = {
    slidesPerView: 1,
    effect: 'flip',
    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
    }
  };

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(utilService.book);
    this.book = utilService.book;
  }

  playSound(page: Page.AsObject) {
    new Audio(utilService.host + '/uploads/' + page.sound.url).play();
  }

  back() {
    this.router.navigateByUrl('session');
  }
}
