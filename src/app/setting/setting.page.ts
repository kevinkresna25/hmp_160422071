import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  password: string = "";
  cekLenght:boolean = false;
  cekNumber:boolean = false;
  cekSpecial:boolean = false;

  linkPhoto: string = "";

  constructor() { }

  ngOnInit() {
  }

  cekPassword(){
    this.cekLenght = this.password.length > 6;
    this.cekNumber = /\d/.test(this.password);
    this.cekSpecial = /[!@#$%^&*]/.test(this.password);
  }

}
