import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { IonSlides, Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Book, Page } from '../../../../sdk/book_pb';
import { environment } from '../../../../environments/environment';
import { apiService, utilService } from '../../../service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  @ViewChild('slider') slides: IonSlides;
  host = environment.apiUrl;
  book: Book.AsObject;

  constructor(
    private file: File,
    private media: Media,
    private router: Router,
    private platform: Platform) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.book = utilService.book;
  }

  originalRead() {
    utilService.isOriginal = true;
    this.router.navigateByUrl('read');
  }

  yoursRead() {
    utilService.isOriginal = false;
    this.router.navigateByUrl('read');
  }

  back() {
    this.router.navigateByUrl('home');
  }
}
