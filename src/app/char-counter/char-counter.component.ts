import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-char-counter',
  templateUrl: './char-counter.component.html',
  styleUrls: ['./char-counter.component.css']
})
export class CharCounterComponent implements OnInit {

  @Input() counterValue!: number;
  @Input() maxVal: number = 255;

  constructor() { }

  ngOnInit(): void {
  }
}
