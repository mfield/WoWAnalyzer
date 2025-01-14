import { formatNumber, formatPercentage } from 'common/format';
import SPELLS from 'common/SPELLS';
import Analyzer, { Options, SELECTED_PLAYER } from 'parser/core/Analyzer';
import Events, { HealEvent } from 'parser/core/Events';
import BoringSpellValueText from 'parser/ui/BoringSpellValueText';
import Statistic from 'parser/ui/Statistic';
import STATISTIC_ORDER from 'parser/ui/STATISTIC_ORDER';

const UNHOLY_STRENGTH_STRENGTH = 0.15; // 15% Str buff while active

class RuneOfTheFallenCrusader extends Analyzer {
  healing: number = 0;
  overhealing: number = 0;

  constructor(options: Options) {
    super(options);

    const active = this.selectedCombatant.hasWeaponEnchant(SPELLS.RUNE_OF_THE_FALLEN_CRUSADER);
    this.active = active;
    if (!active) {
      return;
    }

    this.addEventListener(
      Events.heal.to(SELECTED_PLAYER).spell(SPELLS.UNHOLY_STRENGTH_BUFF),
      this._onHeal,
    );
  }

  _onHeal(event: HealEvent) {
    if (event.overheal) {
      this.overhealing += event.overheal;
    }
    this.healing += event.amount + event.absorb;
  }

  get overhealPercentage() {
    return this.overhealing / this.healing;
  }

  get uptime() {
    return (
      this.selectedCombatant.getBuffUptime(SPELLS.UNHOLY_STRENGTH_BUFF.id) /
      this.owner.fightDuration
    );
  }

  get averageStrength() {
    return this.uptime * UNHOLY_STRENGTH_STRENGTH;
  }

  statistic() {
    return (
      <Statistic
        position={STATISTIC_ORDER.OPTIONAL(2)}
        size="flexible"
        tooltip={
          <>
            <strong>Uptime: </strong> {formatPercentage(this.uptime)}% <br />
            <strong>Healing: </strong> {formatNumber(this.healing)} <br />
            <strong>Overhealing: </strong> {formatNumber(this.overhealing)} (
            {formatPercentage(this.overhealPercentage)} %) <br />
          </>
        }
      >
        <BoringSpellValueText spellId={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER.id}>
          <>
            {formatPercentage(this.averageStrength)} % <small>average Strength</small>
          </>
        </BoringSpellValueText>
      </Statistic>
    );
  }
}

export default RuneOfTheFallenCrusader;
