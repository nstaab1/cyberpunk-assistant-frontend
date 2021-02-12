import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomizerService {
  constructor() {}

  randomIntInRange(minNum: number, maxNum: number): number {
    return Math.floor(Math.random() * maxNum) + minNum;
  }

  randomStat() {
    return Math.floor(Math.random() * 10) + 1;
  }
}
