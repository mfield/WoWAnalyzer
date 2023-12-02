import { change, date } from 'common/changelog';
import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';
import {
  Arbixal,
  emallson,
  jazminite,
  Jonfanz,
  Khadaj,
  Lapideas,
  Putro,
  Sharrq,
  Sref,
  Tialyss,
  ToppleTheNun,
  Trevor,
  Vireve,
  Pilsung,
  HerzBlutRaffy,
  Abelito75,
  Jundarer,
  Vollmer,
  Awildfivreld,
  nullDozzer,
  Bigsxy,
  Seriousnes,
  Arlie,
  LucasLevyOB,
} from 'CONTRIBUTORS';
import { ItemLink } from 'interface';
import SpellLink from 'interface/SpellLink';

// prettier-ignore
export default [
  change(date(2023, 11, 28), 'Actually populate Sentry releases.', ToppleTheNun),
  change(date(2023, 11, 28), 'Update Sentry release naming.', ToppleTheNun),
  change(date(2023, 11, 28), 'Remove deprecated Shadowlands combatantinfo that was breaking the Holy Priest analyzer.', emallson),
  change(date(2023, 11, 27), <>Fix inaccurate tooltip for <ItemLink id={ITEMS.ELEMENTAL_LARIAT.id}/>.</>, Trevor),
  change(date(2023, 11, 27), 'Change trinket obj structure and add Classic WotLK trinkets', jazminite),
  change(date(2023, 11, 25), <>Change range check shortcut from 'less than' to 'less than or equal to'</>, Seriousnes),
  change(date(2023, 11, 23), 'Refactor Code Smell Missing Union Type.', LucasLevyOB),
  change(date(2023, 11, 19), 'Improve error reporting integration.', ToppleTheNun),
  change(date(2023, 11, 19), 'Remove warning for 10.2 logs.', ToppleTheNun),
  change(date(2023, 11, 18), 'Regenerate talents.', ToppleTheNun),
  change(date(2023, 11, 15), 'i18n: Translation to Portuguese of the pages News, Specs, Premium, and About.', LucasLevyOB),
  change(date(2023, 11, 15), 'Refactor Code Smell Any Type.', LucasLevyOB),
  change(date(2023, 11, 15), 'Add backgrounds for Dawn of the Infinites, Everbloom, and Throne of the Tides.', ToppleTheNun),
  change(date(2023, 11, 13), <>Add stat tracking and statistics for <ItemLink id={ITEMS.ELEMENTAL_LARIAT.id}/>.</>, nullDozzer),
  change(date(2023, 11, 7), 'Fix Classic class / spec ranking ids.', jazminite),
  change(date(2023, 11, 7), 'Add warning for 10.2 logs.', ToppleTheNun),
  change(date(2023, 11, 1), 'Add support for Dragonflight Season 3 dungeons.', Arlie),
  change(date(2023, 10, 27), 'Change the actions and reducers into slices.', Arlie),
  change(date(2023, 10, 26), 'Fix an issue when getting damage/healing contribution from crit effects for certain effects that affect total damage', Putro),
  change(date(2023, 10, 26), 'Add background images for Amirdrassil bosses.', ToppleTheNun),
  change(date(2023, 10, 26), <>Correct <SpellLink spell={SPELLS.MIGHT_OF_THE_MOUNTAIN} /> to work with pets and count them twice as the effect is effectively doubled in-game.</>, Putro),
  change(date(2023, 10, 22), 'Disable specs broken by talent regeneration for 10.2.', ToppleTheNun),
  change(date(2023, 10, 22), 'Regenerate talents for 10.2.', ToppleTheNun),
  change(date(2023, 10, 22), 'Rename all .js files to .jsx.', ToppleTheNun),
  change(date(2023, 10, 22), 'Remove articles.', ToppleTheNun),
  change(date(2023, 10, 22), 'Fix statistic ordering on the stats page.', emallson),
  change(date(2023, 10, 20), <>Refactor <ItemLink id={ITEMS.VOICE_OF_THE_SILENT_STAR.id}/> module to correcly grant and steal the correct stats depending on your current stats.</>, nullDozzer),
  change(date(2023, 10, 20), <>Add stat tracking and statistics for all Dragonflight Weapon Enchants such as <SpellLink spell={SPELLS.WAFTING_DEVOTION_ENCHANT}/> and <SpellLink spell={SPELLS.SPORE_TENDER_ENCHANT} />.</>, nullDozzer),
  change(date(2023, 10, 16), 'Fix some variable capitalizations', Trevor),
  change(date(2023, 10, 14), 'Paginate data loading, allowing M+ to be re-enabled for most specs', emallson),
  change(date(2023, 10, 12), <>Make ICC the default Classic zone.</>, emallson),
  change(date(2023, 10, 12), 'Simplify checking if a fight is M+.', ToppleTheNun),
  change(date(2023, 10, 9), 'Add Amirdrassil raid data.', ToppleTheNun),
  change(date(2023, 10, 9), 'Remove Burning Crusade raid data.', ToppleTheNun),
  change(date(2023, 10, 9), 'Bump retail version to 10.1.7.', ToppleTheNun),
  change(date(2023, 10, 9), 'Add T31 set IDs.', ToppleTheNun),
  change(date(2023, 10, 8), 'Improve spell auto-detection to hopefully include talents.', ToppleTheNun),
  change(date(2023, 10, 7), <>Add support for ICC bosses.</>, emallson),
  change(date(2023, 10, 3), <>Refactor code for related event retrieval.</>, Seriousnes),
  change(date(2023, 10, 1), <>Improve code for coloring texts and backgrounds by <span className='Paladin'>player</span> <span className='Warrior'>classes</span>.</>, nullDozzer),
  change(date(2023, 10, 1), <>Refactor of effects that grant "Primary Stat" such as <ItemLink id={ITEMS.ELEMENTAL_POTION_OF_ULTIMATE_POWER_R3.id} /> and <ItemLink id={ITEMS.DRACONIC_AUGMENT_RUNE.id} /> to only provide current stat and thus match logged values better.</>, nullDozzer),
  change(date(2023, 9, 30), "Removed `shownSpell` from Ability type as it's no longer used.", Putro),
  change(date(2023, 9, 25), 'Reset scrollposition to top of window when navigating within app except when switching tabs. This fixes a scenario where you would end up staring at the pages footer after clicking a spec on the Specs page.', nullDozzer),
  change(date(2023, 9, 25), 'Fix broken drilldown link in always be casting module that is used my multiple specs', nullDozzer),
  change(date(2023, 9, 25), 'Fix Patreon / GitHub login buttons', emallson),
  change(date(2023, 9, 24), 'Fix lots of react rendering errors', nullDozzer),
  change(date(2023, 9, 24), 'Change to e2e tests to fail explicitly when there are unexpected errors in the console.', nullDozzer),
  change(date(2023, 9, 23), 'Make sure that the Shadowflame Wreathe icon can be displayed.', ToppleTheNun),
  change(date(2023, 9, 17), 'CooldownGraphSubsection now takes an optional parameter "description", which will be used instead of the default one if given.', Awildfivreld),
  change(date(2023, 9, 17), 'Introduce hover tooltip in resource tracker graphs, and optional wasted resources line.', Awildfivreld),
  change(date(2023, 9, 12), 'Disable M+ logs containing Augmentation Evokers temporarily.', ToppleTheNun),
  change(date(2023, 9, 6), "Reworked getRepeatedTalentCount to use getTalentRank behind the scenes, and renamed it to getMultipleTalentRanks.", Putro),
  change(date(2023, 9, 5), 'Add Classic Guild page', jazminite),
  change(date(2023, 9, 5), 'Update talent data for patch 10.1.7', emallson),
  change(date(2023, 9, 4), <>Add module for tracking of <ItemLink id={ITEMS.ACCELERATING_SANDGLASS.id} />.</>, nullDozzer),
  change(date(2023, 9, 2), 'Refactor haste buffs to be more understandable. Implements some haste buffs that were non-functional.', nullDozzer),
  change(date(2023, 9, 2), 'Fix some spec links not working in some scenarions', nullDozzer),
  change(date(2023, 8, 30), 'Update SpellLinks to automatically support talents.', ToppleTheNun),
  change(date(2023, 8, 27), 'Fixed broken Warcraft Logs link on the character page.', Bigsxy),
  change(date(2023, 8, 24), 'Stop showing warning of limited support while developing locally', nullDozzer),
  change(date(2023, 8, 23), 'Revert upgrade of charting library to fix area charts.', emallson),
  change(date(2023, 8, 19), 'Add support for Warcraft Logs\' phase data in new logs.', emallson),
  change(date(2023, 8, 18), 'Update dependencies.', ToppleTheNun),
  change(date(2023, 8, 16), 'Add Classic buffs that effect haste rating', jazminite),
  change(date(2023, 8, 12), 'Add Classic character parse page', jazminite),
  change(date(2023, 8, 9), 'Fix combatant count in M+.', ToppleTheNun),
  change(date(2023, 8, 9), 'Disable Augmentation Evoker analysis in M+.', ToppleTheNun),
  change(date(2023, 8, 8), 'Fix bug in EventLinkNormalizer', Trevor),
  change(date(2023, 8, 8), 'Deduplicate the dependencies of the project', Putro),
  change(date(2023, 8, 7), 'Remove some deprecated code.', ToppleTheNun),
  change(date(2023, 8, 1), 'Add Irideus Fragment and Mirror of Fractured Tomorrows trinkets.', Vollmer),
  change(date(2023, 8, 2), 'Add support for buffRemaining in the APL modules.', Putro),
  change(date(2023, 7, 31), <>Add enchantment check for <ItemLink id={ITEMS.SHADOWED_BELT_CLASP_R3.id} />.</>, ToppleTheNun),
  change(date(2023, 7, 29), 'Fix another issue loading parses using character search', emallson),
  change(date(2023, 7, 29), 'Fix an issue loading parses using character search', Putro),
  change(date(2023, 7, 27), 'Add Sarkareth haste buff', Awildfivreld),
  change(date(2023, 7, 27), 'Fix i18n in suggestions.', ToppleTheNun),
  change(date(2023, 7, 25), 'Improve consistency when fetching talents for tables.', ToppleTheNun),
  change(date(2023, 7, 25), 'Fix crash when using certain i18n functions.', ToppleTheNun),
  change(date(2023, 7, 23), 'Tooltip on Timeline Improvements', Abelito75),
  change(date(2023, 7, 22), 'Update i18n library version.', [ToppleTheNun, emallson]),
  change(date(2023, 7, 22), 'Update Classic Enchants', jazminite),
  change(date(2023, 7, 21), 'Add scrollability to Buff count graphs', Vollmer),
  change(date(2023, 7, 19), 'Update NameSearch to swap between Retail and Classic Realm lists', jazminite),
  change(date(2023, 7, 17), 'Update spell registration to use `satisfies` keyword', ToppleTheNun),
  change(date(2023, 7, 17), 'Remove MappedEvent', Tialyss),
  change(date(2023, 7, 17), 'Make patch incompatibility warning more clear.', ToppleTheNun),
  change(date(2023, 7, 17), 'Add ability to support talents that cost resources per second; regenerate talents.', ToppleTheNun),
  change(date(2023, 7, 14), 'Updates for Classic Realms', jazminite),
  change(date(2023, 7, 13), 'Mark 10.1.5 as the active patch.', ToppleTheNun),
  change(date(2023, 7, 10), 'Regenerate talents for 10.1.5.', ToppleTheNun),
  change(date(2023, 7, 10), 'Update remaining SpellLink usage.', ToppleTheNun),
  change(date(2023, 7, 9), 'Update SpellLink usage for all classic specs.', ToppleTheNun),
  change(date(2023, 7, 7), 'Add missing encounters to S2 M+.', ToppleTheNun),
  change(date(2023, 7, 7), 'Add patch 10.1.5 details.', ToppleTheNun),
  change(date(2023, 7, 3), 'Fix an issue causing cast efficiency for spells to be artificially inflated', Putro),
  change(date(2023, 6, 30), 'Regenerate talents.', ToppleTheNun),
  change(date(2023, 6, 28), 'Update retail realms for US, EU, TW, and KR.', ToppleTheNun),
  change(date(2023, 6, 26), 'Improve ability to have custom ESLint rules.', ToppleTheNun),
  change(date(2023, 6, 25), <>Correctly hide <ItemLink id={ITEMS.VOICE_OF_THE_SILENT_STAR.id} /> if it isn't equipped.</>, Putro),
  change(date(2023, 6, 25), 'Added many Aberrus DoTs to the ignore list for tank hit tracking', emallson),
  change(date(2023, 6, 22), 'Added Thousandbone Tongueslicer to list of high tier foods.', Sref),
  change(date(2023, 6, 22), 'Remove ESLint disable from probability module.', ToppleTheNun),
  change(date(2023, 6, 19), <>Implement <ItemLink id={ITEMS.VOICE_OF_THE_SILENT_STAR.id} /> stat tracking</>, Jundarer),
  change(date(2023, 6, 18), 'Add Vessel, Spoils and Wafting Devotion haste buffs and update item scaling data.', Jundarer),
  change(date(2023, 6, 17), 'Update core directories to use new spell link format.', ToppleTheNun),
  change(date(2023, 6, 17), 'Update articles to use new spell link format.', ToppleTheNun),
  change(date(2023, 5, 31), <>Implement <ItemLink id={ITEMS.CALL_TO_DOMINANCE.id} /> module for Monk, Shaman, and Warlock</>, Trevor),
  change(date(2023, 5, 29), 'Add missing Balance Druid haste buffs.', Jundarer),
  change(date(2023, 5, 21), 'Refactor raid buff tracking and support tracking Windfury Totem.', ToppleTheNun),
  change(date(2023, 5, 21), <>Fix <ItemLink id={ITEMS.HISSING_RUNE_R3.id} /> showing as a weak enhancement.</>, Trevor),
  change(date(2023, 5, 21), <>Fix <ItemLink id={ITEMS.LAMBENT_ARMOR_KIT_R3.id} /> showing as a weak enchantment.</>, ToppleTheNun),
  change(date(2023, 5, 20), <>Add support for <ItemLink id={ITEMS.ENCHANT_WEAPON_SHADOWFLAME_WREATHE_R3.id} />, <ItemLink id={ITEMS.ENCHANT_WEAPON_SPORE_TENDER_R3.id} />, and <ItemLink id={ITEMS.LAMBENT_ARMOR_KIT_R3.id} />.</>, ToppleTheNun),
  change(date(2023, 5, 17), 'Fix issue with negative Haste values.', emallson),
  change(date(2023, 5, 11), 'Fix multi-rank talent tooltip links.', ToppleTheNun),
  change(date(2023, 5, 10), 'Add Classic Character Thumbnails to PlayerSelection page.', jazminite),
  change(date(2023, 5, 10), 'Speed up e2e tests.', ToppleTheNun),
  change(date(2023, 5, 10), 'Fix Echo of Nelthation display.', ToppleTheNun),
  change(date(2023, 5, 10), 'Add season 2 dungeon backgrounds.', ToppleTheNun),
  change(date(2023, 5, 10), 'Fix Kazzara displaying as Magmorax.', ToppleTheNun),
  change(date(2023, 5, 9), 'Changed default zone for character parses to Aberrus', emallson),
  change(date(2023, 5, 8), 'Add Classic Realm data to scripts/realms.', jazminite),
  change(date(2023, 5, 8), 'Add Trial of the Grand Crusader raid and images for Classic WotLK.', jazminite),
  change(date(2023, 5, 8), 'Update leech rating per 1% to 10.1 values', Putro),
  change(date(2023, 5, 7), 'Add DebuffUptime module + Updates to AlwaysBeCasting and CancelledCasts.', jazminite),
  change(date(2023, 5, 5), 'Fix Playwright tests.', ToppleTheNun),
  change(date(2023, 5, 4), 'Add 10.1 patch.', ToppleTheNun),
  change(date(2023, 5, 2), 'Bumped game version to 10.1', emallson),
  change(date(2023, 4, 24), 'Add ability to filter M+ analysis by dungeon pulls.', ToppleTheNun),
  change(date(2023, 4, 24), 'Additions and updates for Classic Potions (guide and checklist).', jazminite),
  change(date(2023, 4, 23), 'Add Performance Label component to use with UptimeBarSubStatistic.', jazminite),
  change(date(2023, 4, 20), 'Add M+ season 2 images.', ToppleTheNun),
  change(date(2023, 4, 19), 'Add Aberrus raid images.', ToppleTheNun),
  change(date(2023, 4, 17), 'Update Classic WotLK Priest spells.', jazminite),
  change(date(2023, 4, 16), 'Ported Major Defensive guide sections to core code so other tank specs can use it.', emallson),
  change(date(2023, 4, 16), 'Ported Shuffle chart to core code so other tank specs can use it.', emallson),
  change(date(2023, 4, 15), 'Add Classic WotLK Raid Buffs to Fight Report page.', jazminite),
  change(date(2023, 4, 8), 'Improve support for older browsers', emallson),
  change(date(2023, 4, 2), 'Add Healthstone Checker for Classic WotLK.', jazminite),
  change(date(2023, 4, 1), 'Classic WotLK - Add phases to Ulduar bosses.', jazminite),
  change(date(2023, 4, 1), 'Remove unnecessary console log.', ToppleTheNun),
  change(date(2023, 3, 31), 'Refactor SpellLink props to use "spell" instead of "id".', ToppleTheNun),
  change(date(2023, 3, 31), 'Add Dragonflight season 1 M+ dungeon images.', ToppleTheNun),
  change(date(2023, 3, 30), 'Add ability to use PTR tooltips based on report zone.', ToppleTheNun),
  change(date(2023, 3, 29), 'Mark 10.0.5 logs as not current.', ToppleTheNun),
  change(date(2023, 3, 28), 'Refactor cast breakdown components to make them less noisy.', ToppleTheNun),
  change(date(2023, 3, 23), 'Add Hardmode difficulty for classic.', HerzBlutRaffy),
  change(date(2023, 3, 21), 'Add Ulduar raid and images for Classic WotLK.', jazminite),
  change(date(2023, 3, 21), 'Add patch info for 10.0.7.', ToppleTheNun),
  change(date(2023, 3, 20), 'Fix an issue where APL rules could mistakenly mismatch, causing weird UI issues.', emallson),
  change(date(2023, 3, 18), 'Add T30 set IDs.', ToppleTheNun),
  change(date(2023, 3, 18), 'Add Classic WotLK Rogue spells', jazminite),
  change(date(2023, 3, 17), 'Added Ulduar enchants and fixed cloak enchant for Classic', Arbixal),
  change(date(2023, 3, 16), 'TypeProp removal P1.', Abelito75),
  change(date(2023, 3, 13), 'Fixed Cooldown Tracker.', Abelito75),
  change(date(2023, 3, 15), "Add prettier to the CI", Putro),
  change(date(2023, 3, 8), 'Add Classic WotLK P2 trinkets.', jazminite),
  change(date(2023, 3, 6), 'Fix combatants not being dispatched to the Redux store.', ToppleTheNun),
  change(date(2023, 3, 4), 'Add Playwright tests for validating application behavior.', ToppleTheNun),
  change(date(2023, 3, 3), 'Fix "leech" event throwing errors during development for classic logs.', ToppleTheNun),
  change(date(2023, 2, 25), 'Add Role Support for Classic Player Loader.', HerzBlutRaffy),
  change(date(2023, 2, 25), 'Fix development issue with CastEfficiency dumping large errors in the console.', emallson),
  change(date(2023, 2, 25), 'Fix spell ID for classic Bloodthirst.', ToppleTheNun),
  change(date(2023, 2, 21), 'Add Classic Warrior spells', Pilsung),
  change(date(2023, 2, 20), 'Fixed missing food buffs for WotLK Classic.', Arbixal),
  change(date(2023, 2, 19), 'Added a workaround for handling of combatantinfo on Algalon, Yogg-Saron, and Hodir in WotLK Classic.', emallson),
  change(date(2023, 2, 9), <>Add <ItemLink id={ITEMS.POTION_OF_SHOCKING_DISCLOSURE_R3.id} /> to combat potion list.</>, ToppleTheNun),
  change(date(2023, 2, 6), 'Rewrite test utilities in TypeScript.', ToppleTheNun),
  change(date(2023, 2, 3), 'Remove old Classic Spec data for unsupported specs.', jazminite),
  change(date(2023, 1, 31), 'Add raid specific haste buffs for Classic WotLK (Ulduar).', jazminite),
  change(date(2023, 1, 30), 'Lookup Classic spec by talent tree IF the icon is generic. Generic icons occur when the player changes talents during raid.', jazminite),
  change(date(2023, 1, 30), 'Update retail talent data', emallson),
  change(date(2023, 1, 30), <>Fixed potion checker for <SpellLink spell={ITEMS.POTION_OF_CHILLED_CLARITY_R3} /></>, Trevor),
  change(date(2023, 1, 30), "Correct an issue with accessing undefined values in GetRelatedEvents, HasRelatedEvent and AddRelatedEvent", Putro),
  change(date(2023, 1, 26), 'Update performance box rows to use CSS grid instead of flexbox.', ToppleTheNun),
  change(date(2023, 1, 25), 'Bump retail patch to 10.0.5.', ToppleTheNun),
  change(date(2023, 1, 24), "Fixed an issue where Guide pages weren't showing by default", Sref),
  change(date(2023, 1, 20), <>Adjust maximum combat potion usages to account for <SpellLink spell={SPELLS.ALACRITOUS_ALCHEMIST_STONE} />.</>, ToppleTheNun),
  change(date(2023, 1, 18), 'Add missing 3* weapon enhancements.', ToppleTheNun),
  change(date(2023, 1, 17), 'Add ability to generate PTR talents and add documentation on how to do so.', ToppleTheNun),
  change(date(2023, 1, 17), 'Add 10.0.5 patch information.', ToppleTheNun),
  change(date(2023, 1, 16), 'Refactor result page rendering.', ToppleTheNun),
  change(date(2023, 1, 16), 'Remove remaining references to Shadowlands spells except for foods.', ToppleTheNun),
  change(date(2023, 1, 15), 'Overhauls enchants recommendations (removing gloves, adding bracers & boots).', Lapideas),
  change(date(2023, 1, 14), "Fixed an issue where the Events tab wouldn't load", Sref),
  change(date(2023, 1, 7), 'Update dependencies.', ToppleTheNun),
  change(date(2023, 1, 7), 'Remove support for Wowdb tooltips.', ToppleTheNun),
  change(date(2023, 1, 5), 'Make weapon enhancement suggestions more readable.', ToppleTheNun),
  change(date(2023, 1, 5), 'Fix changelogs showing some contributors as invalid.', ToppleTheNun),
  change(date(2023, 1, 1), 'Add Pull Request template.', jazminite),
  change(date(2022, 12, 30), 'Add commonly used Classic P1 trinkets with buff procs.', jazminite),
  change(date(2022, 12, 28), 'Allow fetching Vault of the Incarnates parses.', ToppleTheNun),
  change(date(2022, 12, 27), 'Refactor talent helper functions (hasTalent, getRepeatedTalentCount and getTalentRank) inside Combatant to only accept Talent objects.', Putro),
  change(date(2022, 12, 26), 'Fix tooltips breaking if you switched from Classic logs to Retail logs.', ToppleTheNun),
  change(date(2022, 12, 25), 'Add spells and update files for Classic Hunters (no functionality yet).', jazminite),
  change(date(2022, 12, 25), 'Fix broken lazy-loaded statistics.', ToppleTheNun),
  change(date(2022, 12, 25), 'Remove Refreshing Healing Potion and Potion of Withering Vitality from combat potion checking.', ToppleTheNun),
  change(date(2022, 12, 25), 'Stop using Wowhead beta links for Dragonflight content.', ToppleTheNun),
  change(date(2022, 12, 23), 'Add spells and re-arrange files for Classic Druids (no functionality yet).', jazminite),
  change(date(2022, 12, 20), 'Ignore duplicate spell IDs for talents during development.', ToppleTheNun),
  change(date(2022, 12, 20), 'Export additional information for each talent to help identify talents that affect the same spell (such as Berserk: X talents for Guardian Druid).', Putro),
  change(date(2022, 12, 19), 'Fixed an issue for tracking leg enhancements.', Vireve),
  change(date(2022, 12, 20), 'Fix an issue with talents that cost a decimal % of base mana', Putro),
  change(date(2022, 12, 19), 'Fix rendering issue with performance boxes on Brewmaster Monk and Restoration Druid summaries.', emallson),
  change(date(2022, 12, 19), 'Regenerate talents.', ToppleTheNun),
  change(date(2022, 12, 14), 'Remove Shadowlands items.', ToppleTheNun),
  change(date(2022, 12, 17), 'Fixed an issue with forward event lookups in Event History.', Sharrq),
  change(date(2022, 12, 14), 'Correct effect IDs for Tailoring leg enhancements.', ToppleTheNun),
  change(date(2022, 12, 14), 'Update Vantus Rune check to use Vault of the Incarnates Vantus Runes.', ToppleTheNun),
  change(date(2022, 12, 14), "Add spell data for Hoard of Draconic Delicacies and Grand Feast of the Kalu'ak.", ToppleTheNun),
  change(date(2022, 12, 13), 'Mark T28 tier set references as deprecated.', ToppleTheNun),
  change(date(2022, 12, 13), 'Add stat enhancements for foods except for feasts.', ToppleTheNun),
  change(date(2022, 12, 8), 'Updated rating per % values in StatTracker to 70 levels, and updated base mana pools in preparation for next talent regeneration', Putro),
  change(date(2022, 12, 8), 'Add support for empowered cast log events.', ToppleTheNun),
  change(date(2022, 12, 7), 'Update Vault of the Incarnates boss images.', ToppleTheNun),
  change(date(2022, 12, 6), 'Add stat enhancements for some potions and phials.', ToppleTheNun),
  change(date(2022, 12, 6), 'Add data for and analyze Dragonflight food.', ToppleTheNun),
  change(date(2022, 12, 6), 'Update flask analysis to check phials instead.', ToppleTheNun),
  change(date(2022, 12, 6), 'Localize leg enhancements.', ToppleTheNun),
  change(date(2022, 12, 6), 'Add item/spell/analysis for missing tailoring leg enhancements.', ToppleTheNun),
  change(date(2022, 12, 6), 'Add analysis for leg enhancements.', ToppleTheNun),
  change(date(2022, 12, 6), 'Add item/spell data for leg enhancements.', ToppleTheNun),
  change(date(2022, 12, 6), 'Add support for remaining potions.', ToppleTheNun),
  change(date(2022, 12, 5), <>Add support for <ItemLink id={ITEMS.FERAL_HIDE_DRUMS.id} />.</>, ToppleTheNun),
  change(date(2022, 12, 5), <>Add stats for <ItemLink id={ITEMS.DRACONIC_AUGMENT_RUNE.id} />.</>, ToppleTheNun),
  change(date(2022, 12, 5), 'Remove Shadowlands weapon enhancements from the accepted list.', ToppleTheNun),
  change(date(2022, 12, 3), 'Remove Shadowlands dungeons and raids.', ToppleTheNun),
  change(date(2022, 12, 3), 'Remove usages of Shadowlands covenants, soulbinds, conduits, and legendaries.', ToppleTheNun),
  change(date(2022, 12, 3), 'Add Dragonflight launch as the current "patch".', ToppleTheNun),
  change(date(2022, 11, 30), 'Add Dragonflight Engineering enchantments and weapon enchancements.', ToppleTheNun),
  change(date(2022, 11, 30), <>Add support for <ItemLink id={ITEMS.DRACONIC_AUGMENT_RUNE.id} />.</>, ToppleTheNun),
  change(date(2022, 11, 30), 'Add Vault of Incarnates to ZONES and remove Shadowlands raids from ZONES.', ToppleTheNun),
  change(date(2022, 11, 30), <>Add Evoker's <SpellLink spell={SPELLS.FURY_OF_THE_ASPECTS} /> as a Bloodlust buff.</>, ToppleTheNun),
  change(date(2022, 11, 30), <>Add support for <ItemLink id={ITEMS.REFRESHING_HEALING_POTION_R3.id} />.</>, ToppleTheNun),
  change(date(2022, 11, 29), 'Deprecate/disable access to Shadowlands covenants, soulbinds, conduits, and legendaries.', ToppleTheNun),
  change(date(2022, 11, 29), 'Fix encounter stats broken by the talent rework.', ToppleTheNun),
  change(date(2022, 11, 29), 'Remove analysis for Shadowlands dungeon/raid/crafted items.', ToppleTheNun),
  change(date(2022, 11, 28), 'Add chevron to cooldown expandables.', ToppleTheNun),
  change(date(2022, 11, 27), 'Convert Character tab to TypeScript.', ToppleTheNun),
  change(date(2022, 11, 27), 'Add phials for Dragonflight.', ToppleTheNun),
  change(date(2022, 11, 26), 'Add potions for Dragonflight.', ToppleTheNun),
  change(date(2022, 11, 26), 'Add gems for Dragonflight.', ToppleTheNun),
  change(date(2022, 11, 26), 'Add Inscription weapon enhancements for Dragonflight.', ToppleTheNun),
  change(date(2022, 11, 21), 'Reduce usage of render props in app wrapper.', ToppleTheNun),
  change(date(2022, 11, 21), 'Convert Results to a functional component.', ToppleTheNun),
  change(date(2022, 11, 23), 'Update talent data for all specs', emallson),
  change(date(2022, 11, 21), 'Move away from legacy context APIs where possible.', ToppleTheNun),
  change(date(2022, 11, 21), 'Reduce usage of render props in Home page.', ToppleTheNun),
  change(date(2022, 11, 21), 'Convert ThroughputPerformance to a functional component.', ToppleTheNun),
  change(date(2022, 11, 21), 'Convert StatisticBox and LazyLoadStatisticBox to TypeScript.', ToppleTheNun),
  change(date(2022, 11, 21), 'Put consumables panels side-by-side in preparation section of Guides and add support for potions and flasks.', ToppleTheNun),
  change(date(2022, 11, 20), 'Update PlayerLoader to use router hooks instead of compose.', ToppleTheNun),
  change(date(2022, 11, 20), 'Convert NameSearch to a functional component.', ToppleTheNun),
  change(date(2022, 11, 20), 'Convert ReportLoader to a functional component.', ToppleTheNun),
  change(date(2022, 11, 20), 'Update FightSelection to use hooks instead of compose.', ToppleTheNun),
  change(date(2022, 11, 20), 'Fix talent display overflowing on character parses page.', ToppleTheNun),
  change(date(2022, 11, 20), 'Convert app wrapper to TypeScript.', ToppleTheNun),
  change(date(2022, 11, 20), 'Convert Home page to TypeScript.', ToppleTheNun),
  change(date(2022, 11, 18), 'Add food buff information to Preparation section of Guides.', ToppleTheNun),
  change(date(2022, 11, 18), 'Update localization files.', ToppleTheNun),
  change(date(2022, 11, 15), 'Add Classic WotLK Racials.', jazminite),
  change(date(2022, 11, 15), 'Add 10.0.2 patch information.', ToppleTheNun),
  change(date(2022, 11, 15), 'Add SuggestionSection component to help transition into Guides.', ToppleTheNun),
  change(date(2022, 11, 14), 'Add Blacksmithing weapon enhancements for Dragonflight.', ToppleTheNun),
  change(date(2022, 11, 13), 'Add weapon enhancements to preparation section of guide.', ToppleTheNun),
  change(date(2022, 11, 13), 'Hide Dragonflight warning on Classic logs that don\'t have a build selected', emallson),
  change(date(2022, 11, 12), 'Backend work on resource tracking, including light bug fixes and ability to query stats for specific time periods', Sref),
  change(date(2022, 11, 11), 'Add player icon lookup for configs to Classic specs.', jazminite),
  change(date(2022, 11, 9), 'Add spells for Classic Deathknights (no functionality yet).', jazminite),
  change(date(2022, 11, 10), 'Add missing default tooltip for preparation section of guide.', ToppleTheNun),
  change(date(2022, 11, 10), 'Hide rank for talents with only one rank.', ToppleTheNun),
  change(date(2022, 11, 9), 'Add bombs and cleanup Classic Engineering.', jazminite),
  change(date(2022, 11, 7), 'Update for Classic WCLs URL.', jazminite),
  change(date(2022, 11, 7), 'Configure Greater Spellpower enchant for WoTLK', Tialyss),
  change(date(2022, 11, 6), 'Update PlayerTile for Classic to clear console errors.', jazminite),
  change(date(2022, 11, 2), 'Add Dragonflight enchants.', ToppleTheNun),
  change(date(2022, 11, 1), 'Add Preparation section that can be included in Guides.', ToppleTheNun),
  change(date(2022, 11, 1), 'Re-add missing specs to the specializations page.', ToppleTheNun),
  change(date(2022, 10, 31), 'Add slightly more ergonomic talent cast efficiency wrapper.', ToppleTheNun),
  change(date(2022, 10, 31), 'Update patch compatibility for specs supporting Dragonflight.', ToppleTheNun),
  change(date(2022, 10, 30), 'Add Classic WotLK specs.', jazminite),
  change(date(2022, 10, 26), 'Convert most of report loading process to functions.', ToppleTheNun),
  change(date(2022, 10, 25), 'Improve patch version detection for retail and classic.', ToppleTheNun),
  change(date(2022, 10, 25), 'Exclude classic from patch version checking.', ToppleTheNun),
  change(date(2022, 10, 25), 'Add prepatch warning and add prepatch details.', ToppleTheNun),
  change(date(2022, 10, 25), 'Update stat scaling values for DF prepatch - and add values to easily swap over after prepatch ends', Putro),
  change(date(2022, 10, 24), 'Updating WOTLK Potions', Khadaj),
  change(date(2022, 10, 24), 'Updating WOTLK Foods, adding food suggestions', Khadaj),
  change(date(2022, 10, 22), 'Extract proxyRestrictedTable function for both retail and classic.', ToppleTheNun),
  change(date(2022, 10, 22), 'Add BiS Warlock Chest Enchant to Max enchants', jazminite),
  change(date(2022, 10, 22), 'Updating WOTLK to use custom spell definitions.', Khadaj),
  change(date(2022, 10, 22), 'Correct some issues with talent generation', Putro),
  change(date(2022, 10, 22), 'Updating Flask and Elixir list for WOTLK.', Khadaj),
  change(date(2022, 10, 22), 'Removing weapon enhancement checker for WOTLK.', Khadaj),
  change(date(2022, 10, 22), 'Updating Enchant list for WOTLK Classic.', Khadaj),
  change(date(2022, 10, 17), 'Use generated talent info for character pages.', ToppleTheNun),
  change(date(2022, 10, 16), 'Update SpellLink to accept Spell instances.', ToppleTheNun),
  change(date(2022, 10, 16), 'Add ability to determine if wearing T29 2pc or 4pc.', ToppleTheNun),
  change(date(2022, 10, 16), 'Adding sourceInstance to BuffEvent', Jonfanz),
  change(date(2022, 10, 14), 'Updates to EventLinkNormalizer to allow for more advanced usage.', Sref),
  change(date(2022, 10, 13), 'Adding Hyperspeed Accelerators to WOTLK analysis.', Khadaj),
  change(date(2022, 10, 13), 'Adding Frag Belt to WOTLK analysis.', Khadaj),
  change(date(2022, 10, 11), 'Remove Effusive Anima Accelerator analyzer.', ToppleTheNun),
  change(date(2022, 10, 11), 'Remove conduits and soulbinds from character page.', ToppleTheNun),
  change(date(2022, 10, 11), 'Convert Discord button to TypeScript.', ToppleTheNun),
  change(date(2022, 10, 9), 'Fixed an issue where DeathRecapTracker was being disabled by a bad Blessing of Sacrifice ID', Sref),
  change(date(2022, 10, 5), 'Add Vault of the Incarnates raid information.', ToppleTheNun),
  change(date(2022, 10, 4), 'Add Blessing of the Bronze as a raid buff.', ToppleTheNun),
  change(date(2022, 10, 3), 'Convert PreparationRule component to TypeScript.', ToppleTheNun),
  change(date(2022, 10, 3), 'Rename Shadowlands parser directory to Retail.', ToppleTheNun),
  change(date(2022, 10, 3), 'Rename TBC parser directory to Classic.', ToppleTheNun),
  change(date(2022, 10, 2), 'Update Specs page for Dragonflight.', ToppleTheNun),
  change(date(2022, 9, 23), 'Convert Character parses page to TypeScript.', ToppleTheNun),
  change(date(2022, 9, 10), 'Update known patch versions for Dragonflight.', ToppleTheNun),
  change(date(2022, 9, 10), 'Show Dragonflight talents on character page if able to detect them.', ToppleTheNun),
  change(date(2022, 9, 8), 'Bump supported versions of classic and retail.', ToppleTheNun),
  change(date(2022, 9, 8), 'Add support for Dragonflight talent detection.', emallson),
  change(date(2022, 9, 7), 'Added the beginnings of a Shared Code system to make spec maintenance easier.', Sharrq),
  change(date(2022, 8, 28), 'Add capability of auto-generating talents for Dragonflight based on gamedata', Putro),
];
