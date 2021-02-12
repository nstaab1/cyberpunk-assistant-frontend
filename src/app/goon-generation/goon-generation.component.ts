import { Armor } from './../models/armor';
import { RANGED_WEAPONS } from './../data/ranged-weapons';
import { RangedWeapon } from './../models/ranged-weapon';
import { Component, OnInit } from '@angular/core';
import { Goon } from '../models/goon';
import { CombatStats } from '../models/stats/combat-stats';
import { FortuneStats } from '../models/stats/fortune-stats';
import { MentalStats } from '../models/stats/mental-stats';
import { PhysicalStats } from '../models/stats/physical-stats';
import { RandomizerService } from '../randomizer.service';
import { ARMOR_TYPES } from '../data/armor-types';

@Component({
  selector: 'app-goon-generation',
  templateUrl: './goon-generation.component.html',
  styleUrls: ['./goon-generation.component.css'],
})
export class GoonGenerationComponent implements OnInit {
  goons: Goon[] = [];
  constructor(public randomizer: RandomizerService) {}

  ngOnInit(): void {}

  generateGoons(): void {
    this.goons.push(
      new Goon(
        new MentalStats(
          this.randomizer.randomStat(),
          this.randomizer.randomStat(),
          this.randomizer.randomStat(),
          this.randomizer.randomStat()
        ),
        new CombatStats(
          this.randomizer.randomStat(),
          this.randomizer.randomStat()
        ),
        new FortuneStats(this.randomizer.randomStat()),
        new PhysicalStats(
          this.randomizer.randomStat(),
          this.randomizer.randomStat(),
          this.randomizer.randomStat()
        ),
        this.chooseRandomWeapons(1),
        this.chooseRandomArmor(),
        this.chooseRandomArmor()
      )
    );
  }

  chooseRandomWeapons(amountOfWeapons: number): RangedWeapon[] {
    const weapons = [];
    for (let i = 0; i < amountOfWeapons; i++) {
      weapons.push(
        RANGED_WEAPONS[
          this.randomizer.randomIntInRange(0, RANGED_WEAPONS.length)
        ]
      );
    }

    return weapons;
  }

  chooseRandomArmor(): Armor {
    return ARMOR_TYPES[this.randomizer.randomIntInRange(0, ARMOR_TYPES.length)];
  }
}
