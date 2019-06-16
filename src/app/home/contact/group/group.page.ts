import * as grpcWeb from 'grpc-web';
import { Router } from '@angular/router';
import { User } from '../../../../sdk/user_pb';
import { Group } from '../../../../sdk/group_pb';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { apiService, utilService } from '../../../service/api.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  users: User.AsObject[] = [];

  constructor(
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    let stream = apiService.userClient.list((new User), apiService.metaData);
    stream.on('data', response => {
      let user = response.toObject();
      user['isChecked'] = true;
      this.users.push(user);
    });
    stream.on('error', err => {
      utilService.alert(JSON.stringify(err));
    });
  }

  async addPrompt() {
    const alert = await this.alertController.create({
      message: '输入群名称',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          value: '',
          placeholder: '群名'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: '确定',
          handler: (data) => {
            this.addGroup(data.name1);
          }
        }
      ]
    });

    await alert.present();
  }

  addGroup(groupName: string) {
    if (!groupName) {
      utilService.alert('请输入群名称!');
      return;
    }

    let tsGroup = new Group();
    tsGroup.setName(groupName);
    for (let j = 0; j < this.users.length; j++) {
      let user = this.users[j];
      if (user['isChecked']) {
        tsGroup.addMembers(user.id);
      }
    }
    apiService.groupClient.add(tsGroup, apiService.metaData, (err: grpcWeb.Error, response: Group) => {
      if (err) {
        utilService.alert(JSON.stringify(err));
      }
      this.router.navigateByUrl('contact');
    });
  }
}
