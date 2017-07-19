import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  @ViewChild('place') private placeCanvas: ElementRef;
  @ViewChild('container') private placeContainer: ElementRef;

  private backgroundUrl;
  private g;
  private hexColors = ['#FFFFFF', '#FF0000', '#FFA500', '#008000', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#000000', '#8B4513', '#FF4B00', '#00FF00', '#808080', '#FFD700', '#9ACD32', '#1E90FF', '#4B0082', '#FF69B4'];


  constructor() { }

  ngOnInit() {
    let timer = Observable.timer(0,50);
    timer.subscribe(t=>this.updateBackground());
  }

  updateBackground() {
    if(this.g == null) {
      this.g = this.placeCanvas.nativeElement.getContext('2d');
      if(this.g == null) return;
    }
    this.g.globalAlpha = .2;
    this.g.fillStyle = this.hexColors[Math.floor(Math.random()*this.hexColors.length)];
    let x = Math.floor(Math.random()*this.placeCanvas.nativeElement.width);
    let y = Math.floor(Math.random()*this.placeCanvas.nativeElement.height);
    this.g.fillRect(x, y, 1, 1);
    var dataUrl = this.placeCanvas.nativeElement.toDataURL();
    this.backgroundUrl = dataUrl;
  }

}
