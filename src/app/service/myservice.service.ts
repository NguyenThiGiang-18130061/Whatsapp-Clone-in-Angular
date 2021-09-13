import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  ws!: WebSocket;
  response!: string;
  message = [
    { register:[
    {
      "action": "onchat",
       "data": {
         "event": "REGISTER",
         "data": {
           "user": "giang1",
           "pass": "12345"
         }
       }
     }
  ]},
  {login:[
    {
      "action": "onchat",
      "data": {
        "event": "LOGIN",
        "data": {
          "user": "giang1",
          "pass": "12345"
        }
      }
    }
  ]},
  {logout:[
    {
      "action": "onchat",
      "data": {
        "event": "LOGOUT"
      }
    }
  ]},
  {create_room:[
    {
      "action": "onchat",
      "data": {
        "event": "CREATE_ROOM",
        "data": {
          "name": "ABC"
        }
      }
    }
  ]},
  {join_room:[
    {
      "action": "onchat",
      "data": {
        "event": "JOIN_ROOM",
        "data": {
          "name": "ABC"
        }
      }
    }
  ]},
  {get_room_chat_mes:[{
    "action": "onchat",
    "data": {
      "event": "GET_ROOM_CHAT_MES",
      "data": {
        "name": "ABC",
        "page":1
      }
    }
  }
  ]},
  {send_chat_1:[
    {
      "action": "onchat",
      "data": {
        "event": "SEND_CHAT",
        "data": {
          "type": "people",
          "to": "ti",
          "mes": "helooooo"
        }
      }
    }
  ]},
  {send_chat_grounp:[
    {
      "action": "onchat",
      "data": {
        "event": "SEND_CHAT",
        "data": {
          "type": "room",
          "to": "abc",
          "mes": "helooooo"
        }
      }
    }
  ]}
  ]
  constructor() { }
  public openWebSocket(){
    this.ws = new WebSocket('ws://203.113.148.132:23023/chat/chat');
    this.ws.onopen = (event) => {
      console.log('Open', event);
    };

    this.ws.onmessage = (event) => {
      this.response = event.data;
    };

    this.ws.onclose = (event) => {
      console.log('Close', event);
    };
  }
  public sendMessage(message:any){
    this.ws.send(message);
  }
  public closeWebSocket(){
    this.ws.close();
  }
}
