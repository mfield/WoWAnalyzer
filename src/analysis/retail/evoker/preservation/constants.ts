import SPELLS from 'common/SPELLS';
import { TALENTS_EVOKER } from 'common/TALENTS';

export const SPELL_COLORS = {
  ECHO: '#fffb0a',
  TA_ECHO: '#6711ad',
  REVERSION: '#ffbb78',
  LIVING_FLAME: '#880e0b',
  VERDANT_EMBRACE: '#96ffd8',
  DREAM_BREATH: '#c49c94',
  SPIRITBLOOM: '#fe85ff',
  EMERALD_BLOSSOM: '#ffffff',
  FLUTTERING_SEEDLING: '#50c878',
};

// heal events that can be caused by an echo buff or proc'd from an echo consumption (seedling)
export const ECHO_HEALS = [
  SPELLS.DREAM_BREATH_ECHO,
  SPELLS.LIVING_FLAME_HEAL,
  SPELLS.EMERALD_BLOSSOM_ECHO,
  TALENTS_EVOKER.SPIRITBLOOM_TALENT,
  TALENTS_EVOKER.VERDANT_EMBRACE_TALENT,
  SPELLS.REVERSION_ECHO,
  SPELLS.FLUTTERING_SEEDLINGS_HEAL,
];

// hots
export const ECHO_BASE_DURATION = 15000;
export const REVERSION_BASE_DURATION = 12000;
export const DREAM_BREATH_MIN_DURATION = 4000;
export const DREAM_BREATH_MAX_DURATION = 16000;

// talents
export const TIMELESS_MAGIC = 0.15;
export const EMPATH_REGEN_FACTOR = 1;
export const FLOW_STATE_FACTOR = 0.1;
export const GRACE_PERIOD_INCREASE = 0.05;
export const CALL_OF_YSERA_DREAM_BREATH_INCREASE = 0.4;
export const CALL_OF_YSERA_DREAM_LIVING_FLAME_INCREASE = 1;
