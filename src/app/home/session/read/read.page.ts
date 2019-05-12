import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { IonSlides, Platform, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Media } from '@ionic-native/media/ngx';
import { Book, Page } from '../../../../sdk/book_pb';
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
  audios = utilService.audiosCache;
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

  async playYours(page: Page.AsObject, book: Book.AsObject) {
    let fullPageName = book.title + "-" + page.name
    if (!this.audios.get(fullPageName)) {
      const toast = await this.toastController.create({
        message: '长按录音',
        color: 'success',
        duration: 1000
      });
      toast.present();
    } else {
      this.audios.get(fullPageName).setVolume(1.0);
      this.audios.get(fullPageName).play();
    }
  }

  onPress(page: Page.AsObject, book: Book.AsObject) {
    let fullPageName = book.title + "-" + page.name
    document.getElementById(fullPageName)['color'] = 'light';
    let fileName = fullPageName + '.3gp';
    let filePath = '';
    if (this.platform.is('ios')) {
      filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + fileName;
    } else if (this.platform.is('android')) {
      filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + fileName;
    }

    if (!this.audios.get(fullPageName)) {
      this.audios.set(fullPageName, this.media.create(filePath));
    }
    this.audios.get(fullPageName).startRecord();
  }

  onPressUp(page: Page.AsObject, book: Book.AsObject) {
    let fullPageName = book.title + "-" + page.name
    this.audios.get(fullPageName).stopRecord();
    document.getElementById(fullPageName)['color'] = 'success';
  }

  back() {
    this.router.navigateByUrl('view');
  }
}
