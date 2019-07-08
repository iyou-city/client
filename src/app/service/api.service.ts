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

  articleClient = new ArticlesClient(environment.apiUrl, null, null);
  userClient = new UsersClient(environment.apiUrl, null, null);
  groupClient = new GroupsClient(environment.apiUrl, null, null);
  messageClient = new MessagesClient(environment.apiUrl, null, null);
  bookClient = new BooksClient(environment.apiUrl, null, null);

  metaData = { 'authorization-token': 'admin' };
}

export class UtilService {
  injector: Injector;
  // peer userId or groupId
  peerId = '';
  msgCache = new Map<string, Message.AsObject[]>();
  audiosCache = new Map<string, MediaObject>();
  book = (new Book);
  isOriginal = true;

  constructor() { }

  getUser(): User {
    if (!window.localStorage.getItem('user')) {
      return null
    }
    let jsonUser = JSON.parse(window.localStorage.getItem('user'));
    let user = new User();
    for (let key in jsonUser) {
      if (key.indexOf("Map") == -1 && key.indexOf("created") == -1) {
        user[key] = jsonUser[key]
      }
    }
    return user
  };

  setUser(user: User) {
    //window.localStorage.setItem('user', JSON.stringify(user));
    window.localStorage.setItem('user', JSON.stringify(user.toObject()));
  }

  logout() {
    window.localStorage.removeItem('user');
  }

  async alert(msg: string, title: string = '提示') {
    const alert = await this.injector.get(AlertController).create({
      header: title,
      message: msg,
      buttons: ['确定']
    });
    await alert.present();
  }
}

export const apiService = new ApiService();
export const utilService = new UtilService();