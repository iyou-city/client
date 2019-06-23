import { User } from '../../../sdk/user_pb';
import { Topic } from '../../../sdk/message_pb';
import { Group } from '../../../sdk/group_pb';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { apiService, utilService } from '../../service/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  users: User[] = [];
  groups: Group[] = [];
  msgCache = utilService.msgCache;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadGroups();
    this.loadUsers();
    this.peersMessages();
    this.groupsMessages();
  }

  loadGroups() {
    let stream = apiService.groupClient.list((new Group), apiService.metaData);
    stream.on('data', response => {
      this.groups.push(response);
    });
    stream.on('error', err => {
      utilService.alert(JSON.stringify(err));
    });
  }

  loadUsers() {
    let stream = apiService.userClient.list((new User), apiService.metaData);
    stream.on('data', response => {
      let user = response;
      user['isDisplay'] = false;
      this.users.push(user);
    });
    stream.on('error', err => {
      utilService.alert(JSON.stringify(err));
    });
  }

  gotoSend(peerId: string) {
    utilService.peerId = peerId;
    this.router.navigateByUrl('send');
  }

  addGroup() {
    this.router.navigateByUrl('group');
  }

  peersMessages() {
    // let tsUser = new User();
    // tsUser.id = utilService.getUser().id;
    let stream = apiService.messageClient.receive(utilService.getUser(), apiService.metaData);
    stream.on('data', response => {
      let msg = response;
      console.log(msg);
      if (this.msgCache.get(msg.from) == null) {
        this.msgCache.set(msg.from, []);
      }
      this.msgCache.get(msg.from).push(msg)
    });
    stream.on('error', err => {
      console.log(err);
      //this.peersMessages();
    });
  }

  groupsMessages() {
    let stream = apiService.groupClient.list(new Empty(), apiService.metaData);
    stream.on('data', response => {
      let group = response;
      this.subscribeTopic(group);
    });
    stream.on('error', err => {
      utilService.alert(JSON.stringify(err));
      //this.groupsMessages();
    });
  }

  subscribeTopic(group: Group) {
    let tsTopIc = new Topic();
    tsTopIc.groupId = group.id;
    let stream = apiService.messageClient.subscribe(tsTopIc, apiService.metaData);
    stream.on('data', response => {
      let topic = response;
      console.log(topic);
      if (this.msgCache.get(topic.groupId) == null) {
        this.msgCache.set(topic.groupId, []);
      }
      this.msgCache.get(topic.groupId).push(topic.message)
    });
    stream.on('error', err => {
      utilService.alert(JSON.stringify(err));
      //this.subscribeTopic(group);
    });
  }
}
