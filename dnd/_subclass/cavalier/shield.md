---
class: Cavalier
name: Order of the Shield
selector: shield
blurb: Cavaliers who join the order of the shield devote their lives to protecting the common folk, from the simple farmer to the honest craftsman.

description: |
  Cavaliers who join the order of the shield devote their lives to protecting the common folk, from the simple farmer to the honest craftsman. These cavaliers stand before the tide, protecting the innocent from roving marauders and hungry monsters.
  
  ### Edicts
  Cavaliers of the Shield share the following edicts.
  - The cavalier must protect the lives and prosperity of the common folk, shielding them from the deprivations of those who would seek to cause them harm or exploit them. 
  - He must give charity when it is warranted and aid when needed. 
  - He must take no action that would cause harm or hardship to those who cannot defend themselves.

# A '<>' before the name will keep the feature from becoming link
#   use if the feature is repeated
level:
  - lvl: 2
    order: 2nd
    features: Challenge, Bonus Proficiency
  - lvl: 7
    order: 7th
    features: Vigilant Defender
  - lvl: 10
    order: 10th
    features: Stem the Tide
  - lvl: 15
    order: 15th
    features: Shining Beacon
  - lvl: 18
    order: 18th
    features: Protect the Meek

features:
  - name: Challenge
    lvl: 2  
    desc: |
      Whenever the target of your challenge makes an attack against a target other than you, you have advantage on the next attack roll against target, as long as the attack is made before the end of your next turn.

  - name: Bonus Proficiency
    lvl: 2  
    desc: |
      You gain proficiency in the Medicine skill.

      Additionally, whenever you use the Medicine skill to stabilize someone, your proficiency bonus is doubled.
      
  - name: Vigilant Defender
    lvl: 7 
    desc: |
      From 7th level, the area within your reach counts as difficult terrain for your enemies.
      
  - name: Stem the Tide
    lvl: 10 
    desc: |
      At 10th level, when you hit a creature with an opportunity attack, reduce the creature's speed by 20 for the rest of the turn. When you make an opportunity attack, you can make an additional reaction before the end of your next turn. You can make no more reactions between turns than your Strength modifier or Dexterity modifier (your choice). You can not benefit from this feature while using the sentinel feat.
      
  - name: Shining Beacon
    lvl: 15 
    desc: |
      At 15th level, you can increase your base speed by 10 feet, can ignore difficult terrain, and gain a +1d4 bonus on attack rolls. This lasts for 1 minute. Once you use this ability, you can't use it again until you finish a short rest.

  - name: Moment of Triumph
    lvl: 18
    desc: |
      At 18th level, you can move to intercept foes. When a foe makes an action, as a reaction, you can move up to your speed (or your mount's speed, if mounted) and make a single melee attack. This movement provokes opportunity attacks as normal. You must end your movement adjacent to an enemy. Once you use this ability, you can't use it again until you finish a short rest.

---
