import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { IonSlides, Platform, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Media } from '@ionic-native/media/ngx';
import { Wechat } from '@ionic-native/wechat/ngx';
import { Book, Page } from '../../../../sdk/book_pb';
import { environment } from '../../../../environments/environment';
import { apiService, utilService } from '../../../service/api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {
  @ViewChild('slider') slides: IonSlides;
  host = environment.webUrl;
  book: Book.AsObject;
  audios = utilService.audiosCache;
  autoPlay = true;
  //showShare = false;
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
    private wechat: Wechat,
    private router: Router,
    private platform: Platform,
    private toastController: ToastController) { }

  ngOnInit() {
    this.book = utilService.book;
  }

  ionViewDidEnter() {
    this.slideChange(null);
  }

  markAutoPlay() {
    this.autoPlay = true;
    this.slides.startAutoplay();
  }

  slideChange(event) {
    this.slides.getActiveIndex().then(e => {
      this.playSound(this.book.pageList[e], this.book);
      //this.showShare = (e == this.book.pageList.length - 1);
    });

  }



  playSound(page: Page.AsObject, book: Book.AsObject) {
    if (utilService.isOriginal) {
      this.playOringial(page);
    } else {
      this.playYours(page, book);
    }
  }

  playOringial(page: Page.AsObject) {
    new Audio(environment.webUrl + '/uploads/' + page.sound.url).play();
  }

  async playYours(page: Page.AsObject, book: Book.AsObject) {
    if (!utilService.getUser()) {
      const toast = await this.toastController.create({
        message: '录音功能，请登录后再操作',
        color: 'success',
        duration: 3000
      });
      toast.present();
      this.slides.stopAutoplay();
      this.autoPlay = false;
      setTimeout(() => {
        this.router.navigateByUrl('login');
      }, 1000);
      return
    }
    let fullPageName = book.title + "-" + page.name
    if (!this.audios.get(fullPageName)) {
      this.slides.stopAutoplay();
      this.autoPlay = false;
      const toast = await this.toastController.create({
        message: '长按[录音]键，进行录音',
        color: 'success',
        duration: 3000
      });
      toast.present();
    } else {
      this.audios.get(fullPageName).play();
    }
  }

  onPress(page: Page.AsObject, book: Book.AsObject) {
    this.slides.stopAutoplay();
    this.autoPlay = false;
    let fullPageName = book.title + "-" + page.name
    document.getElementById(fullPageName)['color'] = 'warning';
    let fileName = fullPageName + '.3gp';
    let filePath = '';
    if (this.platform.is('ios')) {
      filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + fileName;
    } else if (this.platform.is('android')) {
      filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + fileName;
    }

    if (this.audios.get(fullPageName)) {
      this.audios.get(fullPageName).release();
    }
    this.audios.set(fullPageName, this.media.create(filePath));
    this.audios.get(fullPageName).startRecord();
  }

  onPressUp(page: Page.AsObject, book: Book.AsObject) {
    let fullPageName = book.title + "-" + page.name
    this.audios.get(fullPageName).stopRecord();
    document.getElementById(fullPageName)['color'] = 'success';
    this.audios.get(fullPageName).play();
    this.markAutoPlay();
  }

  back() {
    this.router.navigateByUrl('view');
  }

  shareToWebchat() {
    this.wechat.share({
      message: {
        title: "Hi, there",
        description: "This is description.",
        thumb: "www/img/thumbnail.png",
        mediaTagName: "TEST-TAG-001",
        messageExt: "这是第三方带的测试字段",
        messageAction: "<action>dotalist</action>",
        media: {
          type: this.wechat.Type.WEBPAGE,
          webpageUrl: "http://www.bing.com"
        }
      },
      scene: 1,//this.wechat.Scene.TIMELINE   // share to Timeline
    }).then(() => {

    }).catch(err => {
      alert(JSON.stringify(err));
    });
  }
}
