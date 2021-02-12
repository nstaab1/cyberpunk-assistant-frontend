import { Armor } from './../models/armor';

export const ARMOR_TYPES: Armor[] = [
  {
    armorType: 'Leathers',
    stoppingPower: 4,
    armorPenalty: 0,
  },
  {
    armorType: 'Kevlar',
    stoppingPower: 7,
    armorPenalty: 0,
  },
  {
    armorType: 'Light Armorjack',
    stoppingPower: 11,
    armorPenalty: 0,
  },
  {
    armorType: 'Medium Armorjack',
    stoppingPower: 12,
    armorPenalty: -2,
  },
  {
    armorType: 'Heavy Armorjack',
    stoppingPower: 13,
    armorPenalty: -2,
  },
  {
    armorType: 'Flak',
    stoppingPower: 15,
    armorPenalty: -4,
  },
  {
    armorType: 'Metalgear',
    stoppingPower: 18,
    armorPenalty: -4,
  },
];
