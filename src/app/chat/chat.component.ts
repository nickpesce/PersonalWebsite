import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {  MessagingService } from '../messaging.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('messageContainer') private messageContainer: ElementRef;
  private shouldScrollDown: boolean = true;

  constructor(private router: Router, private messaging: MessagingService) { }

  sendMessage(message: NgForm) {
    let text = message.value.message.trim();
    if(text == "") return
    this.messaging.addMessage({sent: true, parts: [{text: text}]});
    message.reset();
    this.scrollDown();

    let parts = [];
    //Send req
    this.messaging.getClient().textRequest(text).then((response)=>{
      let actions = response.result.fulfillment["messages"];
      if(actions != null) {
        for(let action of actions) {
          if( action.type == 0 ) {
            parts.push({text: action.speech});
          } else if( action.type == 4) {
            parts.push(action.payload);
          }
        }
      } else {
        parts.push({text: response.result.fulfillment.speech});
      }
      this.messaging.addMessage({sent: false, parts: parts});
      this.scrollDown();
    }).catch((error)=>{
      this.messaging.addMessage({sent: false, parts: [{text: "I am sorry, but I can't talk right now."}]});
      this.scrollDown();
    });
  }

  scrollDown() {
    this.shouldScrollDown = true;
  }

  ngAfterViewChecked() {
    if(this.shouldScrollDown) {
      try {
        this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
      } catch(err) {
        console.log(err);
      }
      this.shouldScrollDown = false;
    }
  }

  ngOnInit() {
  }
}
