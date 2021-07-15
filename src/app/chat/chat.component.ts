import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible:any;
  message= '';

  constructor() { }

  ngOnInit(): void {
  }
public submitMessage(event:any){
  let value = event.target.value.trim();
  this.message = '';
  // event.target.value = '';
  // if(value.length > 1) return false;
  // Dong lenh khi nhan va bam enter se hien thi o ngoai ben trai duoi ten
  this.conversation.latesMessage = value;
  this.conversation.message.unshift(
    {id: 1,
    body: value,
    time:'10:21 AM',
    me:true}
  )
}
emojiClicked(event:any){
  this.message += event.emoji.native;

}
}
