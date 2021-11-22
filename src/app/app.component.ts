import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  private width!: number;
  private height!: number;
  private size!: number;
  private container!: HTMLDivElement;
  constructor(readonly _title: Title) {
  }

  ngOnInit(): void {
    this._title.setTitle('STR')
    this.width = innerWidth
    this.height = innerHeight
    if (this.width > this.height) {
      this.size = this.height;
    } else {
      this.size = this.width;
    }
    this.container = document.querySelector<HTMLDivElement>('.container')!;
    this.container.style.width = `${this.size}px`;
    this.container.style.height = `${this.size}px`;
    this.container.style.background = `black`;
  }
}
