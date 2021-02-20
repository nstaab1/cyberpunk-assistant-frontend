import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rockerboy-lifepath',
  templateUrl: './rockerboy-lifepath.component.html',
  styleUrls: ['./rockerboy-lifepath.component.scss'],
})
export class RockerboyLifepathComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('Rockerboy component initialized');
  }
}
