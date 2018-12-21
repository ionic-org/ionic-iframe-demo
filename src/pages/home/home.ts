import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
enum iPhoneDevice {
  iPhoneXsMax,
  iPhoneXs,
  iPhone
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public platform: Platform) {

  }

  ionViewDidLoad(){
    this.constantiPhoneX();
  }

  ionViewWillEnter(){
    var iframe = document.createElement("iframe");
    iframe.src = "http://221.213.103.89:801/mobile_new/?autologin=1'></iframe>";

    let div: HTMLDivElement = document.getElementById("div") as HTMLDivElement;
    div.appendChild(iframe);
  }

  getIPhoneDevice() {
    if (this.platform.is("ios")) {
      if (this.platform.width() == 375 && this.platform.height() == 812) {
        return iPhoneDevice.iPhoneXs
      } else if (this.platform.width() == 414 && this.platform.height() == 896) {
        return iPhoneDevice.iPhoneXsMax
      } else {
        return iPhoneDevice.iPhone
      }
    }
  }

  constantiPhoneX() {
    if (this.platform.is("ios")) {
      let div: HTMLDivElement = document.getElementById("div") as HTMLDivElement;
      let device: iPhoneDevice = this.getIPhoneDevice();
      if (device == iPhoneDevice.iPhone) {
        // div.style.paddingTop = "20px";
      } else {
        // div.style.paddingTop = "44px";
        div.style.paddingBottom = "34px";
      }
    }
  }

}
