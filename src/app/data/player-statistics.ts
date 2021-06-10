import { PlayerStatistic } from '../models/player-statistic';

export const MENTAL_GROUP = 'Mental';
export const COMBAT_GROUP = 'Combat';
export const FORTUNE_GROUP = 'Luck';
export const PHYSICAL_GROUP = 'Physical';

export const INT_STAT: PlayerStatistic = {
  name: 'Intelligence',
  abbreviation: 'INT',
  group: MENTAL_GROUP,
};

export const WILL_STAT: PlayerStatistic = {
  name: 'Willpower',
  abbreviation: 'WILL',
  group: MENTAL_GROUP,
};

export const COOL_STAT = {
  name: 'Cool',
  abbreviation: 'COOL',
  group: MENTAL_GROUP,
};

export const EMP_STAT = {
  name: 'Empathy',
  abbreviation: 'EMP',
  group: MENTAL_GROUP,
};

export const TECH_STAT = {
  name: 'Technique',
  abbreviation: 'TECH',
  group: MENTAL_GROUP,
};

export const REFLEX_STAT = {
  name: 'Reflexes',
  abbreviation: 'REF',
  group: COMBAT_GROUP,
};

export const LUCK_STAT = {
  name: 'Luck',
  abbreviation: 'LUCK',
  group: FORTUNE_GROUP,
};

export const BODY_STAT = {
  name: 'Body',
  abbreviation: 'BODY',
  group: PHYSICAL_GROUP,
};

export const DEX_STAT = {
  name: 'Dexterity',
  abbreviation: 'DEX',
  group: PHYSICAL_GROUP,
};

export const MOVE_STAT = {
  name: 'Movement',
  abbreviation: 'MOVE',
  group: PHYSICAL_GROUP,
};
