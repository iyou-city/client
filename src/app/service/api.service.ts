import { Injectable, Injector } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../../sdk/user_pb';
import { Book } from '../../sdk/book_pb';
import { Message } from '../../sdk/message_pb';
import { MediaObject } from '@ionic-native/media/ngx';
import { environment } from '../../environments/environment';
import { ArticlesClient } from '../../sdk/article_grpc_web_pb';
import { BooksClient } from '../../sdk/book_grpc_web_pb';
import { UsersClient } from '../../sdk/user_grpc_web_pb';
import { GroupsClient } from '../../sdk/group_grpc_web_pb';
import { MessagesClient } from '../../sdk/message_grpc_web_pb';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  articleClient = new ArticlesClient(environment.apiUrl);
  userClient = new UsersClient(environment.apiUrl);
  groupClient = new GroupsClient(environment.apiUrl);
  messageClient = new MessagesClient(environment.apiUrl);
  bookClient = new BooksClient(environment.apiUrl);

  metaData = { 'authorization-token': 'admin' };
}

export class UtilService {
  injector: Injector;
  userId = '';
  msgCache = new Map<string, Message.AsObject[]>();
  audiosCache = new Map<string, MediaObject>();
  book = (new Book).toObject();
  isOriginal = true;

  constructor() { }

  getUser(): User.AsObject {
    let localUser = window.localStorage.getItem('user');
    if (!localUser) {
      //window.alert('请登录!')
      return null//(new User).toObject()
    }
    return JSON.parse(localUser)
  }

  setUser(user: User.AsObject) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  async alert(msg: string, title: string = '提示') {
    const alert = await this.injector.get(AlertController).create({
      header: title,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
}

export const apiService = new ApiService();
export const utilService = new UtilService();