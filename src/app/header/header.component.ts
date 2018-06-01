import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public topLinks: Link[];
  constructor() { }

  ngOnInit() {
    this.topLinks = [
      { text: '新闻', url: '' },
      { text: 'hao123', url: '' },
      { text: '地图', url: '' },
      { text: '视频', url: '' },
      { text: '贴吧', url: '' },
      { text: '学术', url: '' },
      { text: '设置', url: '' },
    ];
  }
}
