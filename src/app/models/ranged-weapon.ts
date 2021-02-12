export class RangedWeapon {
  constructor(
    public weaponType: string,
    public weaponQuality: string,
    public weaponSkill: string,
    public singleShotDamage: number,
    public magazineSize: number,
    public ammoType: string,
    public rateOfFire: number,
    public handsRequired: number,
    public canConceal: boolean,
    public specialFeatures: string[]
  ) {
    // this.weaponQuality = 'Normal';
  }
}
