import { Component, OnInit } from '@angular/core';
import { Link } from '../link';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public topLinks: Link[];
  public pattern: string;
  public location: boolean;
  constructor(private loc: Location, private router: Router) { }

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
  patternHandler(event, patter) {
    this.router.navigateByUrl("result")
    this.pattern = event;
    console.warn(this.pattern)
    this.location = true;
  }
}
