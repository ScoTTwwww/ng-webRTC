import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('videoElement') videoElement: any;  
  video: any;

  ngOnInit() {
    this.video = this.videoElement.nativeElement;

    var video = document.querySelector('video')
    
            var constraints = {
                audio: false,
                video: {
                    facingMode: 'user'
                }
            }
    
            navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
                video.srcObject = stream
            })
  }

  start() {
    this.initCamera({ video: true, audio: false });
  }
   sound() {
    this.initCamera({ video: true, audio: true });
  }
  
    initCamera(config:any) {
    var browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.src = window.URL.createObjectURL(stream);
      this.video.play();
    });
  }



}
