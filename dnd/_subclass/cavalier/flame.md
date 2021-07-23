---
class: Cavalier
name: Order of the Flame
selector: flame
blurb: A cavalier of the order of the flame devotes his life to the pursuit of personal glory.

description: |
  A cavalier of the order of the flame devotes his life to the pursuit of personal glory. Even if such pursuit puts his own life on the line, the cavalier pursues legendary status and the fame and glory associated with such renown.
  
  ### Edicts
  Cavaliers of the Flame share the following edicts.
  - The cavalier must pursue glory for himself and those with whom he associates. 
  - He must strive to heap glory upon his name, no matter the costs. 
  - He must challenge and defeat an ever-increasing host of rivals to further cement his illustrious reputation.

# A '<>' before the name will keep the feature from becoming link
#   use if the feature is repeated
level:
  - lvl: 2
    order: 2nd
    features: Challenge, Bonus Proficiency
  - lvl: 7
    order: 7th
    features: Foolhardy Rush
  - lvl: 10
    order: 10th
    features: Daunting Success
  - lvl: 15
    order: 15th
    features: Blaze of Glory
  - lvl: 18
    order: 18th
    features: Moment of Triumph

features:
  - name: Challenge
    lvl: 2
    desc: |
      You become ever more emboldened with each glorious victory. As an bonus action after reducing the target of your challenge to 0 hit points, you can elect to issue a new challenge to an opponent within 20 feet. This challenge does not count against your number of challenges per day. You gain a bonus on melee damage rolls against the target of you challenge equal to 2 times the number of consecutive challenges you have issued so far. As long as you continue to defeat targets and there are more opponents in range, you can continue to issue challenges indefinitely, with the bonus on damage rolls increasing with each subsequent foe.

  - name: Bonus Proficiency
    lvl: 2
    desc: |
      You gain proficiency in the Survival skill.

      Additionally, whenever your are at your maximum hit point, your proficiency bonus is doubled when making Intimidate check.
      
  - name: Foolhardy Rush
    lvl: 7
    desc: |
      At 7th level, you can charge across the battlefield at a moment's notice. Whenever you make an initiative check, as long as you roll an 11 or higher on the die, you can move up to your full movement as a reaction and you are not surprised. Instead, you can spend one superiority dice to allow you mount to move.

  - name: Daunting Success
    lvl: 10
    desc: |
      At 10th level, when you score a critical hit with a melee weapon, you can attempt an Intimidate check to demoralize all foes within 15 feet who can see you. If they fail at a Wisdom save against a DC equal to the result of the Intimidate check, they are frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on all the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.
      
  - name: Blaze of Glory
    lvl: 15
    desc: |
      At 15th level, you can increase your base speed by 10 feet, can ignore difficult terrain, and gain a +1d4 bonus on attack rolls. This lasts for 1 minute. Once you use this ability, you can't use it again until you finish a short rest.

  - name: Moment of Triumph
    lvl: 18
    desc: |
      At 18th level, you can, as a bonus action, declare a moment of triumph. For until the start of your next turn, you have advantage on all rolls. Once you use this ability, you can't use it again until you finish a short rest.


---
