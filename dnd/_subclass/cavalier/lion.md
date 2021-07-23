---
class: Cavalier
name: Order of the Lion
selector: lion
blurb: A cavalier who has pledged himself to a sovereign.

description: |
  A cavalier who belongs to this order has pledged himself to a sovereign; be it a king, queen, or even the local warlord. Cavaliers of this order are stalwart and dedicated to their cause, willing to go any length to ensure the safety of their lord and his domain.

  ### Edicts
  Cavaliers of the Lion share the following edicts.
  - The cavalier must protect the life and lands of his sovereign at all costs.
  - He must obey the commands of his sovereign without question.
  - He must strive to expand the power and prestige of his realm.

# A '<>' before the name will keep the feature from becoming link
#   use if the feature is repeated
level:
  - lvl: 2
    order: 2nd
    features: Challenge, Bonus Proficiency
  - lvl: 7
    order: 7th
    features: Lion's Call
  - lvl: 10
    order: 10th
    features: For the King
  - lvl: 15
    order: 15th
    features: Improved Critical
  - lvl: 18
    order: 18th
    features: Shield of the Liege

features:
  - name: Challenge
    lvl: 2  
    desc: |
      Whenever you issue a challenge, you receive a +2 bonus to AC on all attacks attacks that originate within 30 feet from you.

  - name: Bonus Proficiency
    lvl: 2  
    desc: |
      You gain proficiency in the History skill.

      Additionally, whenever you make an Intelligence check involving your sovereign or his realm, your proficiency bonus is doubled if it applies to the check.
      
  - name: Lion's Call
    lvl: 7 
    desc: |
      At 7th level, you can use an action to bolster the resolve of your companions who can see or hear you. These allies gain temporary hit points equal to half your character level + your Charisma modifier. If any of the allies affected is frightened, he can immediately make another saving throw to resist the effect (if allowed). Once you use this ability, you can't use it again until you finish a short rest.

  - name: For the King
    lvl: 10 
    desc: |
      At 10th level, you can call out to your allies, inspiring them to greatness. As a bonus action, you can grant a bonus equal to your Charisma modifier on all attack and damage rolls to all allies within 30 feet (including yourself). This bonus lasts until the start of your next turn. Once you use this ability, you can't use it again until you finish a long rest.

  - name: Improved Critical
    lvl: 15 
    desc: |
      Beginning at 15th level, your weapon attacks score a critical hit on a roll of 19 or 20.

  - name: Shield of the Liege
    lvl: 18
    desc: |
      At 18th level, you can protect those around you. Allies that are adjacent to the you receive a +1 bonus to AC.

      In addition, as a reaction, you can redirect an attack made at a creature adjacent to you, as long as the creature making the attack is within reach. This ability must be declared before the attack roll is made.

---
