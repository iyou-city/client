import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { IonSlides, Platform, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Media } from '@ionic-native/media/ngx';
import { Book, Page, Media as MultiMedia } from '../../../../sdk/book_pb';
import { apiService, utilService } from '../../../service/api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {
  @ViewChild('slider') slides: IonSlides;
  host = utilService.host;
  book: Book.AsObject;
  audios = new Map<string, MultiMedia.AsObject>();
  slideOpts = {
    slidesPerView: 1,
    effect: 'flip',
    autoplay: {
      delay: 3000,
      stopOnLastSlide: true,
    }
  };

  constructor(
    private file: File,
    private media: Media,
    private router: Router,
    private platform: Platform,
    private toastController: ToastController) { }

  ngOnInit() {
    console.log(utilService.book);
    this.book = utilService.book;
  }

  ionViewDidEnter() {
    this.playSound(this.book.pageList[0]);
  }

  slideChange(event) {
    this.slides.getActiveIndex().then(e => {
      this.playSound(this.book.pageList[e]);
    });
  }

  playSound(page: Page.AsObject) {
    new Audio(utilService.host + '/uploads/' + page.sound.url).play();
  }

  async playYours(page: Page.AsObject) {
    if (!this.audios[page.name]) {
      const toast = await this.toastController.create({
        message: '长按录音',
        position: 'middle',
        color: 'success',
        duration: 1000
      });
      toast.present();
    } else {
      this.audios[page.name].play();
    }
  }

  onPress(page: Page.AsObject) {
    let fileName = 'record' + page.name + '.3gp';
    let filePath = '';
    if (this.platform.is('ios')) {
      filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + fileName;
    } else if (this.platform.is('android')) {
      filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + fileName;
    }
    this.audios[page.name] = this.media.create(filePath);
    this.audios[page.name].startRecord();
  }

  onPressUp(page: Page.AsObject) {
    this.audios[page.name].stopRecord();
  }

  back() {
    this.router.navigateByUrl('view');
  }
}
