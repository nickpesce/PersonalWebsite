import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent implements OnInit {
  @Input() private message
  private typingText: string = ".";

  constructor() { }

  ngOnInit() {
    let timer = Observable.timer(0, 500);
    timer.subscribe(t=>{
      let n = t%3 + 1
      this.typingText = ".".repeat(n)
    });
  }
}
