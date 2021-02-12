import { Armor } from './armor';
import { RangedWeapon } from './ranged-weapon';
import { PhysicalStats } from './stats/physical-stats';
import { FortuneStats } from './stats/fortune-stats';
import { MentalStats } from './stats/mental-stats';
import { CombatStats } from './stats/combat-stats';

export class Goon {
  public hitPoints: number;
  public seriouslyWounded: number;
  public deathSave: number;

  constructor(
    public mentalStats: MentalStats,
    public combatStats: CombatStats,
    public fortuneStats: FortuneStats,
    public physicalStats: PhysicalStats,
    public rangedWeapons: RangedWeapon[],
    public headArmor: Armor,
    public bodyArmor: Armor
  ) {
    this.hitPoints =
      10 + 5 * (Math.ceil(physicalStats.body + mentalStats.willpower) / 2);
    this.seriouslyWounded = Math.ceil(this.hitPoints / 2);
    this.deathSave = physicalStats.body;
  }
}
