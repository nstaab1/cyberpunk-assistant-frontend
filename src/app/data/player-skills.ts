import { PlayerSkill } from '../models/player-skill';
import { INT_STAT, WILL_STAT } from './player-statistics';

const AWARENESS_SKILL_GROUP = 'Awareness';

export const CONCENTRATION_SKILL: PlayerSkill = {
  name: 'Concentration',
  group: AWARENESS_SKILL_GROUP,
  stat: WILL_STAT,
  description:
    'Skill of focus and mental control, encompassing feats of memory, recall, ignoring distractions, and physiological mastery.',
};

export const CONCEAL_REVEAL_SKILL: PlayerSkill = {
  name: 'Conceal/Reveal Object',
  group: AWARENESS_SKILL_GROUP,
  stat: INT_STAT,
  description:
    'Skill for hiding objects and finding objects that have been hidden. This is the Skill used for concealing weapons under clothing and detecting concealed weapons.',
};

export const LIP_READING_SKILL: PlayerSkill = {
  name: 'Lip Reading',
  group: AWARENESS_SKILL_GROUP,
  stat: INT_STAT,
  description: "Skill of reading someone's lips to tell what they are saying",
};

export const PERCEPTION_SKILL: PlayerSkill = {
  name: 'Perception',
  group: AWARENESS_SKILL_GROUP,
  stat: INT_STAT,
  description:
    'Skill of spotting hidden things like clues, traps, and people using the Stealth Skill, but not objects hidden with the Conceal/Reveal Object Skill.',
};

export const TRACKING_SKILL: PlayerSkill = {
  name: 'Tracking',
  group: AWARENESS_SKILL_GROUP,
  stat: INT_STAT,
  description:
    'Skill of following a trail by observing tracks and other clues left behind.',
};

//TODO: NEED TO KEEP ADDING SKILLS TO THIS LIST

export const PLAYER_SKILLS: PlayerSkill[] = [
  CONCENTRATION_SKILL,
  CONCEAL_REVEAL_SKILL,
];
