import { Injectable } from '@angular/core';
import {  ApiAiClient } from 'api-ai-javascript';

@Injectable()
export class MessagingService {

  private client = new ApiAiClient({accessToken: 'b909a25ceb7c4b6a9d1b806870863672'})
  private messages: {sent: boolean, parts: [{}]}[] = [{sent: false, parts: [{text: "Hello! Thanks for coming! Feel free to ask me anything."}]}]

  constructor() { }

  addMessage(message) {
    this.messages.push(message);
  }

  getMessages() {
    return this.messages;
  }

  getClient() {
    return this.client;
  }

}
