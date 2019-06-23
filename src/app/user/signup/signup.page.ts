import * as grpcWeb from 'grpc-web';
import { Router } from '@angular/router';
import { User } from '../../../sdk/user_pb';
import { Component, OnInit } from '@angular/core';
import { apiService, utilService } from '../../service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user = new User();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  signup() {
    if (!this.user.telephone) {
      utilService.alert('请输入电话！');
      return
    }
    // const tsUser = new User();
    // tsUser.name = this.user.name;
    // tsUser.telephone = this.user.telephone;
    // tsUser.password = this.user.password;
    apiService.userClient.add(this.user, apiService.metaData, (err: grpcWeb.Error, response: User) => {
      if (err) {
        utilService.alert(err.message);
      } else {
        this.router.navigateByUrl('/login');
      }
      console.log(response);
    })
  }
}
