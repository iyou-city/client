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
  messages: Message.AsObject[];
  message = (new Message).toObject();
  peerUserId: string;

  constructor(private events: Events) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.peerUserId = utilService.userId;
    if (utilService.msgCache.get(this.peerUserId) == null) {
      utilService.msgCache.set(this.peerUserId, []);
    }
    this.messages = utilService.msgCache.get(this.peerUserId);
  }

  send() {
    let tsMessage = new Message();
    tsMessage.setContent(this.message.content);
    tsMessage.setFrom(utilService.getUser().id);
    tsMessage.setTo(this.peerUserId);
    let tt = new Timestamp();
    tt.fromDate(new Date())
    tsMessage.setCreated(tt);
    // e.g.139/153/159***
    if (this.peerUserId.startsWith('1')) {
      apiService.messageClient.send(tsMessage, apiService.metaData, (err: grpcWeb.Error, e: any) => {
        if (err) {
          utilService.alert(err.code + ':' + err.message);
        }
      });
    }
    
    // groupId start with 2
    if (this.peerUserId.startsWith('2')) {
      let topic = new Topic();
      topic.setGroupid(this.peerUserId);
      topic.setMessage(tsMessage);
      apiService.messageClient.publish(topic, apiService.metaData, (err: grpcWeb.Error, e: any) => {
        if (err) {
          utilService.alert(err.code + ':' + err.message);
        }
      });
    }

    this.messages.push(tsMessage.toObject());
    this.message.content = '';
  }
}
