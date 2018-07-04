import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public pattern: string;
  @Output() searchPattern: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient,) {
  }

  ngOnInit() { }

  doSearch() {
    setInterval(() => {
      this.searchPattern.emit(this.pattern);
    })
    // console.warn("pattern: " + this.pattern)
  }
}
