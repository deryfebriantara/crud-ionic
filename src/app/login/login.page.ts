import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { UserService } from '../user.service';
import { LoginResult } from './login-result.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  constructor(
    private menuCtrl : MenuController,
    private userservice: UserService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false)
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true)
  }

  login(){
    const credential = {username: this.username, password: this.password}
    this.userservice.login(credential).subscribe((response: LoginResult) =>{
      if(response.access_token){
        localStorage.setItem('token', response.access_token)
        console.log(response)
        this.navCtrl.navigateRoot(['/user'])
      }
     
    })
  }



}
