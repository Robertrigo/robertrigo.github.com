---
class: Cavalier
name: Order of the Dragon
selector: dragon
blurb: Cavaliers belonging to the order of the dragon dedicate themselves to a group of like-minded individuals, be it a mercenary company or a small band of adventurers.

description: |
  Cavaliers belonging to the order of the dragon dedicate themselves to a group of like-minded individuals, be it a mercenary company or a small band of adventurers. These cavaliers believe in loyalty and friendship, and are willing to lay down their lives to protect their allies.
  
  ### Edicts
  Cavaliers of the Dragon share the following edicts.
  - The cavalier must remain loyal to his allies and must always work to further the aims of the group. 
  - He must protect his allies from harm and defend their honor when called into doubt.

# A '<>' before the name will keep the feature from becoming link
#   use if the feature is repeated
level:
  - lvl: 2
    order: 2nd
    features: Challenge, Bonus Proficiency
  - lvl: 7
    order: 7th
    features: Rallying Cry
  - lvl: 10
    order: 10th
    features: <>Challenge, Inspiring Surge
  - lvl: 15
    order: 15th
    features: Bulwark
  - lvl: 18
    order: 18th
    features: <>Challenge, <>Inspiring Surge, Shield of Blades

features:
  - name: Challenge
    lvl: 2  
    desc: |
      Whenever you issue a challenge, your allies receive a +1 bonus on all damage rolls against the target of your challenge as long as it is adjacent to you. This bonus increases by +1 at 10th level and again at 15th level.

  - name: Bonus Proficiency
    lvl: 2  
    desc: |
      You gain proficiency in the Survival skill.

      Additionally, whenever you make a Survival check to provide food and water for your allies or to protect your allies from harsh weather, your proficiency bonus is doubled if it applies to the check.

  - name: Rallying Cry
    lvl: 7
    desc: |
      At 7th level, you learn how to inspire your allies to fight on past their injuries. When you use your Second Wind feature, you can choose up to three creatures who can see and hear you. Each one regains hit points equal to your fighter level. 

  - name: Inspiring Surge
    lvl: 10 
    desc: |
      Starting at 10th level, when you use your Action Surge feature, you can choose an ally who can see and hear you. That ally can make one weapon attack as a reaction. 

      Starting at 18th level, you can choose two allies, rather than one. 

  - name: Bulwark
    lvl: 15 
    desc: |
      Beginning at 15th level, you can extend the benefit of your Indomitable feature to an ally. When you decide to use Indomitable to reroll an Intelligence, a Wisdom, or a Charisma saving throw and you aren't incapacitated, you can choose one ally that also failed its saving throw against the same effect. If that ally can see or hear you, it can reroll its saving throw and must use the new roll. 

  - name: Shield of Blades
    lvl: 18 
    desc: |
      At 18th level, you gain an expert sense of impending violence around you. When taking the Dodge action, you can extend your protection to those around you. Until the start of your next turn, your adjacent allies bonuses are considered as if they had taken the Dodge action.

      In addition, while dodging, when an attacker that you can see hits you or an adjacent ally with an attack, you can use your reaction to halve the attack's damage.

---
