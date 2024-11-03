import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.fadeInAvatar();
    this.rotateAvatar();
    this.growShrinkAvatar();
  }

  fadeInAvatar() {
    const avatarElement = document.querySelector('#myAvatar') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, opacity: '0' },
        { offset: 0.2, opacity: '0.2' },
        { offset: 0.4, opacity: '0.4' },
        { offset: 0.6, opacity: '0.6' },
        { offset: 0.8, opacity: '0.8' },
        { offset: 1, opacity: '1' },
      ]);
    animation.play();
  }

  rotateAvatar() {
    const avatarElement = document.querySelector('#myAvatar') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(1000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'rotate(0deg)' },
        { offset: 1, transform: 'rotate(360deg)' },
      ]);
    animation.play();
  }

  growShrinkAvatar() {
    const avatarElement = document.querySelector('#myAvatar') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(1500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'rotate(0deg) scale(1)' },
        { offset: 0.5, transform: 'rotate(180deg) scale(1.3)' },
        { offset: 1, transform: 'rotate(360deg) scale(1)' },
      ]);
    animation.play();
  }
}
