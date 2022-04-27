import SPELLS from 'common/SPELLS';
import COVENANTS from 'game/shadowlands/COVENANTS';
import { SpellLink } from 'interface';
import ISSUE_IMPORTANCE from 'parser/core/ISSUE_IMPORTANCE';
import CoreAbilities from 'parser/core/modules/Abilities';

class Abilities extends CoreAbilities {
  spellbook() {
    const combatant = this.selectedCombatant;
    return [
      {
        spell: SPELLS.ICEBOUND_FORTITUDE.id,
        buffSpellId: SPELLS.ICEBOUND_FORTITUDE.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        cooldown: 180,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.5,
          extraSuggestion:
            'Defensive CDs like this are meant to be used smartly. Use it to smooth regular damage intake or to take the edge of big attacks.',
          importance: ISSUE_IMPORTANCE.MINOR,
        },
        timelineSortIndex: 10,
      },
      {
        spell: SPELLS.VAMPIRIC_BLOOD.id,
        buffSpellId: SPELLS.VAMPIRIC_BLOOD.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        cooldown: 90,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.5,
          extraSuggestion:
            'Defensive CDs like this are meant to be used smartly. Use it to smooth regular damage intake or to take the edge of big attacks.',
          importance: ISSUE_IMPORTANCE.MINOR,
        },
        timelineSortIndex: 10,
      },
      {
        spell: SPELLS.BLOOD_BOIL.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: (haste) => 7.5 / (1 + haste),
        gcd: {
          base: 1500,
        },
        charges: 2,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.85,
          extraSuggestion: 'Should be casting it so you have at least one recharging.',
        },
        timelineSortIndex: 4,
      },
      {
        spell: SPELLS.CONSUMPTION_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.SEMI_DEFENSIVE,
        enabled: combatant.hasTalent(SPELLS.CONSUMPTION_TALENT.id),
        cooldown: 45,
        gcd: {
          base: 1500,
        },
        timelineSortIndex: 5,
      },
      {
        spell: SPELLS.DANCING_RUNE_WEAPON.id,
        category: Abilities.SPELL_CATEGORIES.SEMI_DEFENSIVE,
        buffSpellId: SPELLS.DANCING_RUNE_WEAPON_BUFF.id,
        gcd: {
          base: 1500,
        },
        cooldown: 120,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
          extraSuggestion: 'Should be used as an opener and used on CD for the dps boost.',
        },
        timelineSortIndex: 9,
      },
      {
        spell: SPELLS.BLOODDRINKER_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 30,
        gcd: {
          base: 1500,
        },
        enabled: combatant.hasTalent(SPELLS.BLOODDRINKER_TALENT.id),
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
          extraSuggestion:
            "Mostly used as a dps CD. Should be almost casted on CD. Good to use when you're running to the boss or can't melee them.",
        },
        timelineSortIndex: 6,
      },
      {
        spell: SPELLS.DEATH_STRIKE.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        timelineSortIndex: 1,
      },
      {
        spell: SPELLS.DEATHS_CARESS.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        timelineSortIndex: 7,
      },
      {
        spell: SPELLS.DEATH_AND_DECAY.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        enabled:
          !combatant.hasCovenant(COVENANTS.NIGHT_FAE.id) &&
          combatant.hasTalent(SPELLS.RAPID_DECOMPOSITION_TALENT.id),
        cooldown: 15,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.8, //reduced because of proc resets
        },
        timelineSortIndex: 5,
      },
      //do not use cast efficiency for DnD without Rapid Decomposition.
      {
        spell: SPELLS.DEATH_AND_DECAY.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        enabled:
          !combatant.hasCovenant(COVENANTS.NIGHT_FAE.id) &&
          !combatant.hasTalent(SPELLS.RAPID_DECOMPOSITION_TALENT.id),
        cooldown: 15,
        timelineSortIndex: 5,
      },
      {
        spell: SPELLS.HEART_STRIKE.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        timelineSortIndex: 3,
      },
      {
        spell: SPELLS.MARROWREND.id,
        buffSpellId: SPELLS.BONE_SHIELD.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        timelineSortIndex: 2,
      },
      {
        spell: SPELLS.ANTI_MAGIC_SHELL.id,
        buffSpellId: SPELLS.ANTI_MAGIC_SHELL.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        cooldown: combatant.hasTalent(SPELLS.ANTI_MAGIC_BARRIER_TALENT.id) ? 60 - 15 : 60,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.5,
          extraSuggestion:
            'Defensive CDs like this are meant to be used smartly. Use it to smooth regular damage intake or to take the edge of big attacks.',
          importance: ISSUE_IMPORTANCE.MINOR,
        },
        timelineSortIndex: 10,
      },
      {
        spell: SPELLS.MIND_FREEZE.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 15,
      },
      {
        spell: SPELLS.DARK_COMMAND.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 8,
      },
      {
        spell: SPELLS.DEATH_GRIP.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 500,
        },
        cooldown: 15,
        timelineSortIndex: 14,
      },
      {
        spell: SPELLS.DEATHS_ADVANCE.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 45,
        timelineSortIndex: 14,
      },
      {
        spell: SPELLS.WRAITH_WALK_TALENT.id,
        enabled: combatant.hasTalent(SPELLS.WRAITH_WALK_TALENT.id),
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
        cooldown: 60,
        timelineSortIndex: 14,
      },
      {
        spell: SPELLS.GOREFIENDS_GRASP.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
        cooldown: combatant.hasTalent(SPELLS.TIGHTENING_GRASP_TALENT.id) ? 90 : 120,
        timelineSortIndex: 11,
      },
      {
        spell: SPELLS.RAISE_ALLY.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.ASPHYXIATE.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 45,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.CONTROL_UNDEAD.id,
        category: Abilities.SPELL_CATEGORIES.OTHERS,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.RAISE_DEAD_BLOOD_FROST.id,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 120,
      },
      {
        spell: SPELLS.ANTI_MAGIC_ZONE.id,
        buffSpellId: SPELLS.ANTI_MAGIC_ZONE_BUFF.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        cooldown: 120,
        gcd: null,
        isDefensive: true,
      },
      {
        spell: SPELLS.MARK_OF_BLOOD_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        enabled: combatant.hasTalent(SPELLS.MARK_OF_BLOOD_TALENT),
        cooldown: 6,
        gcd: {
          base: 1500,
        },
        timelineSortIndex: 10,
      },
      {
        spell: SPELLS.TOMBSTONE_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        enabled: combatant.hasTalent(SPELLS.TOMBSTONE_TALENT.id),
        cooldown: 60,
        gcd: {
          base: 1500,
        },
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.5,
          extraSuggestion:
            'Defensive CDs like this are meant to be used smartly. Use it to smooth regular damage intake or to take the edge of big attacks.',
          importance: ISSUE_IMPORTANCE.MINOR,
        },
        timelineSortIndex: 10,
      },
      {
        spell: SPELLS.RUNE_TAP.id,
        buffSpellId: SPELLS.RUNE_TAP.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        cooldown: 25,
        charges: 2,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.5,
          extraSuggestion:
            'Defensive CDs like this are meant to be used smartly. Use it to smooth regular damage intake or to take the edge of big attacks.',
          importance: ISSUE_IMPORTANCE.MINOR,
        },
        timelineSortIndex: 10,
      },
      {
        spell: SPELLS.BLOOD_TAP_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        enabled: combatant.hasTalent(SPELLS.BLOOD_TAP_TALENT.id),
        cooldown: 60,
        charges: 2,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.5,
          extraSuggestion: 'Use to generate extra runes at opportune times.',
          importance: ISSUE_IMPORTANCE.MINOR,
        },
        timelineSortIndex: 10,
      },
      {
        spell: SPELLS.BONESTORM_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL_AOE,
        enabled: combatant.hasTalent(SPELLS.BONESTORM_TALENT.id),
        cooldown: 60,
        gcd: {
          base: 1500,
        },
        timelineSortIndex: 9,
      },
      {
        spell: SPELLS.RUNE_1.id,
        category: Abilities.SPELL_CATEGORIES.HIDDEN,
        cooldown: (haste) => 10 / (1 + haste),
        charges: 2,
      },
      {
        spell: SPELLS.RUNE_2.id,
        category: Abilities.SPELL_CATEGORIES.HIDDEN,
        cooldown: (haste) => 10 / (1 + haste),
        charges: 2,
      },
      {
        spell: SPELLS.RUNE_3.id,
        category: Abilities.SPELL_CATEGORIES.HIDDEN,
        cooldown: (haste) => 10 / (1 + haste),
        charges: 2,
      },

      // covenants
      {
        spell: SPELLS.SWARMING_MIST.id,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 60,
        gcd: {
          base: 1500,
        },
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
        },
        enabled: combatant.hasCovenant(COVENANTS.VENTHYR.id),
      },
      {
        spell: SPELLS.DOOR_OF_SHADOWS.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 60,
        gcd: {
          base: 1500,
        },
        enabled: combatant.hasCovenant(COVENANTS.VENTHYR.id),
      },
      {
        spell: SPELLS.ABOMINATION_LIMB.id,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 120,
        gcd: {
          base: 1500,
        },
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
        },
        enabled: combatant.hasCovenant(COVENANTS.NECROLORD.id),
      },
      {
        spell: SPELLS.FLESHCRAFT.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        cooldown: 120,
        enabled: combatant.hasCovenant(COVENANTS.NECROLORD.id),
      },
      {
        spell: SPELLS.SHACKLE_THE_UNWORTHY.id,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 60,
        gcd: {
          base: 1500,
        },
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
        },
        enabled: combatant.hasCovenant(COVENANTS.KYRIAN.id),
      },
      {
        spell: SPELLS.DEATHS_DUE.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 15,
        gcd: {
          base: 1500,
        },
        enabled: combatant.hasCovenant(COVENANTS.NIGHT_FAE.id),
      },
      {
        spell: SPELLS.SOULSHAPE.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 30,
        gcd: {
          base: 1500,
        },
        enabled: combatant.hasCovenant(COVENANTS.NIGHT_FAE.id),
      },
    ];
  }
}

export default Abilities;
