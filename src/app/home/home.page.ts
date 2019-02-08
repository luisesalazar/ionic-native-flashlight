import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isOn: boolean;

  constructor(private flashlight: Flashlight, private platform: Platform) {
    this.platform.ready().then(() => {
      this.updateFlashlightStatus();
    });
  }

  switchOn() {
    this.flashlight.switchOn();
  }

  switchOff() {
    this.flashlight.switchOff();
    this.updateFlashlightStatus();
  }

  toggle() {
    this.flashlight.toggle();
    this.updateFlashlightStatus();
  }

  updateFlashlightStatus() {
    this.flashlight.isSwitchedOn();
  }

}
