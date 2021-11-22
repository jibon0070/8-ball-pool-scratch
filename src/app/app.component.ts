import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  private width!: number;
  private height!: number;
  private size!: number;
  private container!: HTMLDivElement;

  constructor(readonly _title: Title) {
  }

  readonly possible_values = ["250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300", "250k", "100k", "500", "100", "5k", "1.5k", "50k", "10k", "25", "50", "300"];

  ngOnInit(): void {
    this._title.setTitle('STR')
    this.width = innerWidth
    this.height = innerHeight
    if (this.width > this.height) {
      this.size = this.height - 5;
    } else {
      this.size = this.width - 5;
    }
    this.container = document.querySelector<HTMLDivElement>('.container')!;
    this.container.style.width = `${this.size}px`;
    this.container.style.height = `${this.size}px`;
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.style.background = "url('/assets/scratch cover.png')";
      cell.style.backgroundSize = "cover"
      cell.style.width = `${this.size / 3}px`
      cell.style.height = `${this.size / 3}px`
      cell.style.border = "1px solid black"
      cell.style.overflow = "hidden"
      const cell_value = this.possible_values[Math.floor(Math.random() * (this.possible_values.length - 1))]
      console.log(cell_value)
      this.container.append(cell);
      let clicked = false;
      cell.addEventListener('mousedown', ev => {
        ev.preventDefault()
        clicked = true;
      });
      cell.addEventListener('mouseup', ev => {
        ev.preventDefault()
        clicked = false;
      });
      cell.addEventListener('mousemove', ev => {
        if (clicked) {
          ev.preventDefault()
          const bubble = document.createElement('span');
          bubble.style.left = `${ev.clientX - ((this.size / 3)) * 4 / 100}px`
          bubble.style.top = `${ev.clientY - ((this.size / 3)) * 4 / 100}px`
          bubble.style.display = "block";
          bubble.style.position = "absolute";
          bubble.style.width = "4%";
          bubble.style.height = "4%";
          bubble.style.background = `url('/assets/${cell_value}.png')`;
          bubble.style.backgroundSize = `${this.size / 3}px`;
          bubble.style.backgroundPositionX = `${cell.getBoundingClientRect().left}px`;
          bubble.style.backgroundPositionY = `${cell.getBoundingClientRect().top}px`;
          bubble.style.backgroundRepeat = `no-repeat`;
          bubble.style.backgroundAttachment = "fixed";
          bubble.style.pointerEvents = "none";
          bubble.style.borderRadius = "50%";
          cell.appendChild(bubble);
        }
      });
    }
  }
}
