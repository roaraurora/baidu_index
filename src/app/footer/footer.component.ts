import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public links_1: Link[];
  public links_2: Link[];
  constructor() { }

  ngOnInit() {
    this.links_1 = [
      { text: '把百度设为首页', url: '' },
      { text: '关于百度', url: '' },
      { text: 'About Baidu', url: '' },
      { text: '百度推广', url: '' },
    ];
    this.links_2 = [
      { text: '©2018 Baidu ', url: '' },
      { text: '使用百度前必读 ', url: '' },
      { text: '意见反馈 ', url: '' },
      { text: '京ICP证030173号', url: '' },
      { text: '京公网安备1100000020000001号', url: '' },
    ];
  }

}
