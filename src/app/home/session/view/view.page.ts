import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { IonSlides, Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Book, Page } from '../../../../sdk/book_pb';
import { apiService, utilService } from '../../../service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  @ViewChild('slider') slides: IonSlides;
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

  constructor(
    private file: File,
    private media: Media,
    private router: Router,
    private platform: Platform) { }

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
    if (!this.audio) {
      new Audio(utilService.host + '/uploads/' + page.sound.url).play();
    } else {
      //new Audio('assets/audio/1001.mp3').play();
      this.audio.play();
      this.audio.setVolume(0.8);
    }
  }

  audio: MediaObject;
  recordSound() {
    if (!this.audio) {
      // this.audio = this.media.create('assets/audio/1001.mp3');      
      if (this.platform.is('ios')) {
        let fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
        let filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + fileName;
        this.audio = this.media.create(filePath);
      } else if (this.platform.is('android')) {
        let fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
        let filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + fileName;
        this.audio = this.media.create(filePath);
      }

      this.audio.startRecord();
    } else {
      this.audio.stopRecord();
    }
  }

  back() {
    this.router.navigateByUrl('home');
  }
}
