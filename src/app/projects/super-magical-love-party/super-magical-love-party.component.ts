import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-super-magical-love-party',
  templateUrl: './super-magical-love-party.component.html',
  styleUrls: ['./super-magical-love-party.component.css']
})
export class SuperMagicalLovePartyComponent implements OnInit {

  lollipops = ['LollipopBlue.png', 'LollipopGreen.png','LollipopOrange.png','LollipopPink.png','LollipopPurple.png','LollipopRed.png','LollipopTurquoise.png','LollipopYellow.png']
  constructor() { }

  ngOnInit() {
    let timer = Observable.timer(0,1000);
    timer.subscribe(t=>{
      this.lollipops.unshift(this.lollipops.pop());
    });
  }

}
