import * as grpcWeb from 'grpc-web';
import { Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '../../../sdk/user_pb';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { apiService, utilService } from '../../service/api.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  user = utilService.getUser();

  constructor(
    private router: Router,
    private events: Events,
    private camera: Camera) { }

  ngOnInit() {
  }

  select() {
    const options: CameraOptions = {
      quality: 30,
      correctOrientation: true,
      sourceType: 2,
      allowEdit: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.user.icon = base64Image;
    });
  }

  upload() {
    if (!utilService.getUser()) {
      alert('请登录');
      return
    }
    let tsUser = new User();
    tsUser.setId(utilService.getUser().id);
    tsUser.setIcon(this.user.icon);
    tsUser.setSignature(this.user.signature);
    apiService.userClient.update(tsUser, apiService.metaData, (err: grpcWeb.Error, response: User) => {
      if (err) {
        alert(JSON.stringify(err));
        //utilService.alert(JSON.stringify(err));
      } else {
        //alert(JSON.stringify(this.article));
        //this.modalController.dismiss();
        // refresh local storage
        utilService.setUser(this.user);
        this.events.publish('user:login', response.getName());
        this.router.navigateByUrl('home');
      }
    });
  }
}
