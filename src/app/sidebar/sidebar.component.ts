import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  searchText!: string;
  conversations = [
    {name: "Ly Na", time:"8:21 AM", latesMessage:"Hello bạn ơi",latesMessageRead:true,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Na !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Kiều Linh", time:"8:21 AM", latesMessage:"E làm bài tập chưa",latesMessageRead:true,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Linh !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Tuyết Mai", time:"8:21 AM", latesMessage:"Nay có đi học không ?",latesMessageRead:false,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Mai !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Huyền Trang", time:"8:21 AM", latesMessage:"Ktx có cúp điện không ?",latesMessageRead:false,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Trang !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Thoại Anh", time:"8:21 AM", latesMessage:"Coi điểm thi chưa đó",latesMessageRead:true,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Thoại Anh !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Kim Thủy", time:"8:21 AM", latesMessage:"Nay lên trường hả ?",latesMessageRead:false,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Thủy !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Anh Lùn", time:"8:21 AM", latesMessage:"Bao h m về ?",latesMessageRead:false,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Anh !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Anh Thư", time:"8:21 AM", latesMessage:"Có ghé t không ?",latesMessageRead:true,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Thư !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Thu Hương", time:"8:21 AM", latesMessage:"Nào mới bay vào ?",latesMessageRead:true,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Hương !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Trúc Linh", time:"8:21 AM", latesMessage:"Dạ",latesMessageRead:false,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Linh !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Trúc Nhi", time:"8:21 AM", latesMessage:"Dạ",latesMessageRead:false,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Nhi !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Thu Hiền", time:"8:21 AM", latesMessage:"Bye bye !!",latesMessageRead:true,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Hiền !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Minh Anh", time:"8:21 AM", latesMessage:"Cảm ơn !",latesMessageRead:false,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Minh Anh !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Tuyết Minh", time:"8:21 AM", latesMessage:"Ừm",latesMessageRead:true,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Minh !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Thúy Vi", time:"8:21 AM", latesMessage:"Hi!",latesMessageRead:true,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Vi !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Yến Nhi", time:"8:21 AM", latesMessage:"Chút nữa",latesMessageRead:false,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Nhi !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Y Bình", time:"8:21 AM", latesMessage:"Thôi",latesMessageRead:false,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Em !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
    {name: "Nguyệt", time:"8:21 AM", latesMessage:"Oke",latesMessageRead:true,
    message:[
      {id: 1, body: '', time:'8:21 AM', me:true},
      {id: 2, body: 'How are you ?', time:'8:21 AM', me:false},
      {id: 3, body: 'Hello Bé !!', time:'8:21 AM', me:true},
      {id: 4, body: 'Hello Giang', time:'8:21 AM', me:false},

    ],
  },
  ]

  /* Phuong thuc search ten nguoi nhan( return conversations.name
     || return conversations.latesMessage la hoac se tim tin nhan )
     do co "toLowerCase()" nen khong phan biet chu hoa, chu thuong nhung van phan biet khoang trang va cac chu co dau or khong */
  get filteredConversations(){
    return this.conversations.filter((conversations)=>{
    return conversations.name.toLowerCase()
    .includes(this.searchText.toLowerCase())
    || conversations.latesMessage.toLowerCase()
    .includes(this.searchText.toLowerCase())
});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
