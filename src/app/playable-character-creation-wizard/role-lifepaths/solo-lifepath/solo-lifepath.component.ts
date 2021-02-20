import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo-lifepath',
  templateUrl: './solo-lifepath.component.html',
  styleUrls: ['./solo-lifepath.component.scss'],
})
export class SoloLifepathComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Solo component initialized');
  }
}
