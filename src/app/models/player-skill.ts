import { PlayerStatistic } from './player-statistic';

export class PlayerSkill {
  constructor(
    public name: string,
    public group: string,
    public stat: PlayerStatistic,
    public description: string
  ) {}
}
