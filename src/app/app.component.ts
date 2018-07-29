import { AfterViewInit, Component, ViewChild,ElementRef  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement: ElementRef;  
 

  
  constructor(
   

) {
    // local peer
 
}

  ngOnInit() {
   const video =  this.videoElement.nativeElement
    /* var video = document.querySelector('video')
  */
    var constraints = {
      audio: true,
      video: {
          facingMode: 'user'
      }
  }

  navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
    video.srcObject = stream
  
      
  })
 
          
  }


  ngAfterViewInit(): void {
    
  }
 
}
