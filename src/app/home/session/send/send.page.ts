import * as grpcWeb from 'grpc-web';
import { Events } from '@ionic/angular';
import { Message, Topic } from '../../../../sdk/message_pb';
import { Component, OnInit } from '@angular/core';
import { apiService, utilService } from '../../../service/api.service';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {
  messages: Message[];
  message = new Message();
  peerId: string;

  constructor(private events: Events) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.peerId = utilService.peerId;
    if (utilService.msgCache.get(this.peerId) == null) {
      utilService.msgCache.set(this.peerId, []);
    }
    this.messages = utilService.msgCache.get(this.peerId);
  }

  send() {
    let tsMessage = new Message();
    tsMessage.content = this.message.content;
    tsMessage.from = utilService.getUser().id;
    tsMessage.to = this.peerId;
    let tt = new Timestamp();
    tt.fromDate(new Date())
    tsMessage.created = tt;

    // e.g.139/153/159***
    if (this.peerId.startsWith('1')) {
      apiService.messageClient.send(tsMessage, apiService.metaData, (err: grpcWeb.Error, e: any) => {
        if (err) {
          utilService.alert(err.code + ':' + err.message);
        }
        console.log('send', tsMessage, 'done');
      });
    }

    // groupId start with 2
    if (this.peerId.startsWith('2')) {
      let topic = new Topic();
      topic.groupId = this.peerId;
      topic.message = tsMessage;
      apiService.messageClient.publish(topic, apiService.metaData, (err: grpcWeb.Error, e: any) => {
        if (err) {
          utilService.alert(err.code + ':' + err.message);
        }
        console.log('publish', tsMessage, 'done');
      });
    }

    this.messages.push(tsMessage);
    this.message.content = '';
  }
}
