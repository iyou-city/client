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
  isAutoPlay = true;
  showShare = false;
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

  play(autoPlay: boolean) {
    if (autoPlay) {
      this.slides.startAutoplay();
    } else {
      this.slides.stopAutoplay();
    }
    this.isAutoPlay = autoPlay;
  }

  slideChange(event) {
    this.slides.getActiveIndex().then(e => {
      this.playSound(this.book.pageList[e], this.book);
      this.showShare = (e == this.book.pageList.length - 1);
    });
    this.play(true);
  }

  playSound(page: Page.AsObject, book: Book.AsObject) {
    if (utilService.isOriginal) {
      this.playOringial(page);
    } else {
      this.playYours(page, book);
    }
  }

  playOringial(page: Page.AsObject) {
    this.play(false);
    // new Audio(environment.webUrl + '/uploads/' + page.sound.url).play();
    new Audio('https://sp0.baidu.com/-rM1hT4a2gU2pMbgoY3K/gettts?lan=en&text=' + page.name + '&spd=2&source=alading').play();
  }

  async playYours(page: Page.AsObject, book: Book.AsObject) {
    if (!utilService.getUser()) {
      const toast = await this.toastController.create({
        message: '录音功能，请登录后再操作',
        color: 'success',
        duration: 3000
      });
      toast.present();
      this.play(false);
      setTimeout(() => {
        this.router.navigateByUrl('login');
      }, 1000);
      return
    }
    let fullPageName = book.title + "-" + page.name
    if (!this.audios.get(fullPageName)) {
      this.play(false);
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
    this.play(false);
    let fullPageName = book.title + "-" + page.name
    let fileName = fullPageName + '.mp3';
    let filePath = fileName;
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
    document.getElementById(fullPageName)['color'] = 'warning';
  }

  onPressUp(page: Page.AsObject, book: Book.AsObject) {
    let fullPageName = book.title + "-" + page.name
    this.audios.get(fullPageName).stopRecord();
    document.getElementById(fullPageName)['color'] = 'success';
    this.audios.get(fullPageName).play();
    this.play(true);
  }

  back() {
    this.router.navigateByUrl('view');
  }

  shareToWechat() {
    this.wechat.share({
      message: {
        title: "[IYou绘本]少儿英语，一天一读之(" + this.book.title + ")",
        description: "This is description.",
        thumb: "www/img/thumbnail.png",
        mediaTagName: "TEST-TAG-001",
        messageExt: "这是第三方带的测试字段",
        messageAction: "<action>dotalist</action>",
        media: {
          type: 7,// this.wechat.Type.WEBPAGE,
          webpageUrl: environment.webUrl + '/download'//"http://www.bing.com"
        }
      },
      scene: 1,//this.wechat.Scene.TIMELINE   // share to Timeline
    }).then(() => {
      console.log("Success");
    }).catch(err => {
      utilService.alert(JSON.stringify(err));
    });
  }
}
