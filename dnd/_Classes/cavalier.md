---
title: Cavalier
def: a cavalier
archetype: Cavalier Orders

desc: |
  While many warriors strive to perfect their art, spending all of their time honing their skill at martial arms, others spend as much effort dedicating themselves to a cause. These warriors, known as cavaliers, swear themselves to a purpose, serving it above all else. The archetypal cavalier excels at mounted combat, and are often found charging across a battlefield. Usually born to nobility and raised in a royal court, a cavalier is equally at home leading a cavalry charge or exchanging witty repartee at a state dinner. The cavalier's true power comes from the conviction of his ideals, the oaths that he swears, and the challenges he makes.

HD: 1d10
armor: All armor, shields
weapons: Simple weapons, martial weapons
tools: None
save: Constitution, Charisma
skills: Choose two skills from Athletics, History, Insight, Intimidation, Perception, Persuasion, Religion and Survival

equipment: |
  - *(a)* a martial weapon and a shield or *(b)* two martial weapons
  - *(a)* a diplomat's pack or *(b)* an explorer's pack
  - a chain mail, a lance and a horse

multi: Strength 13
multiprof: Light armor, medium armor, shields, simple weapons, martial weapons

# A '<>' before the name will keep the feature from becoming link
#   use if the feature is repeated
# A '<s>' before the name means it is a subclass (archetype) feature

level:
  - lvl: 1
    features: Cavalier Order, Challenge, Mounted Expert
  - lvl: 2
    features: <s>Order feature, Second Wind
  - lvl: 3
    features: Action Surge
  - lvl: 4
    features: Ability Score Improvement
  - lvl: 5
    features: <>Challenge (2 uses), Extra Attack
  - lvl: 6
    features: <>Ability Score Improvement
  - lvl: 7
    features: Ferocious Charger, <s>Order feature
  - lvl: 8
    features: <>Ability Score Improvement
  - lvl: 9
    features: Indomitable
  - lvl: 10
    features: Mounted Superiority, <s>Order feature
  - lvl: 11
    features: <>Extra Attack (2)
  - lvl: 12
    features: <>Ability Score Improvement
  - lvl: 13
    features: <>Challenge (3 uses), <>Indomitable (2 uses)
  - lvl: 14
    features: <>Ability Score Improvement
  - lvl: 15
    features: <s>Order feature
  - lvl: 16
    features: <>Ability Score Improvement
  - lvl: 17
    features: <>Action Surge (2 uses), <>Indomitable (3 uses)
  - lvl: 18
    features: <>Mounted Superiority (d12), <s>Order feature
  - lvl: 19
    features: <>Ability Score Improvement
  - lvl: 20
    features: <>Extra Attack (3)

subclassName: Cavalier Order
subclassFeature: Order feature

features:
  - name: Cavalier Order
    lvl: 1
    desc: |
      When you select this class, you must pledge yourself to a specific order. The order grants a number of bonuses, class skills and traits. In addition, each order includes a number of edicts that you must follow. If you violate any of these edicts, you loses the benefits from the order's challenge ability for 24 hours. The violation of an edict is subject to GM interpretation. 
      
      Members of these orders are not necessarily bound together, but some organizations do exist that are comprised of cavaliers that all belong to one specific order.

  - name: Challenge
    lvl: 1
    desc: |
      As a action, you can challenge a foe who can see, hear and understand you. The target must make a Wisdom saving throw against DC 8 + your proficiency bonus + your Charisma modifier. On a failed save, the target has disadvantage on all attack rolls against targets other than you for 1 minute. The effect also ends if you attack any other creature besides the target or if you are rendered unconscious.

      Your melee attacks deal extra damage equal to your Charisma modifier against the target of your challenge. Some cavalier orders grant you additional effects as you advance in levels, as noted in the order description.

      Once you use this feature, you can't use it again until you finish a short or long rest. You can use this feature twice between rests starting at 5th level and three times between rests starting at 13th level.
      
  - name: Mounted Expert
    lvl: 1
    desc: |
      Your mounted training allows you to effectively control a mount in the chaos of battle. This grants you several benefits.
      * You gain proficiency in Animal Handling.
      * You have advantage on saving throws made to avoid falling off your mount.
      * If you fall off your mount and descend no more than 10 feet, you can land on your feet if you’re not incapacitated.
      * Finally, mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed.
      
      #### Steed
      You may select a mount that becomes your Steed. It uses your proficiency bonus rather than its own. In addition to the areas where it normally uses its proficiency bonus, a steed also adds its proficiency bonus to its AC and to its damage rolls. For each level you gain after 2nd, your steed gains an additional hit die and increases its hit points accordingly.
      
      The Steed obeys your commands as best as it can. It takes its turn on your initiative, though it doesn’t take an action unless you command it to. On your turn, you can command the steed where to move (no action required by you). You can use your action to command it to take the Attack, Dash, Disengage, Dodge, or Help action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the Attack action.
      
      If your steed dies or is otherwise lost, you can obtain another one by spending 1 week bonding with another mount.

      #### Superiority Dice
      While mounted, you gain a set of abilities that are fueled by special dice called superiority dice. You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest.

      #### Using Superiority Dice
      You can expend superiority dice to gain a number of different benefits:

      * **Cavalry Charge**. When you ride your mount at least 20 feet and make an attack with a lance or spear, you can expend one superiority die to add it to your damage roll. In addition, if the target is Large or smaller, it must succeed at a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone.
      * **Control Mount**. When you make a check to influence or control a creature you are riding, you can expend one superiority die to add it to the check. You apply this bonus after making the check but before learning if it was successful.
      * **Evasive Maneuvers**. If either you or your mount is hit by an attack while you are mounted, you can expend one superiority die as a reaction, adding the number rolled to your or your mount's AC. If the attack still hits, you or your mount have resistance to the attack's damage.
     
  - name: <>sub feature
    lvl: 2

  - name: Second Wind
    lvl: 2
    desc: |
      From 1st level, you have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain a number of hit points based on your cavalier class level.

      | Level | Hit Points | Level | Hit Points |
      |:-----:|:-----------|:-----:|:-----------|
      | 1st | 1d10 + cavalier level | 10th | 4d10 + cavalier level
      | 3rd | 2d10 + cavalier level | 15th | 5d10 + cavalier level
      | 7th | 3d10 + cavalier level | 18th | 6d10 + cavalier level

      Once you use this feature, you must finish a short or long rest before you can use it again.

  - name: Action Surge
    lvl: 3
    desc: |
      Starting at 3rd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action. Once you use this feature, you must finish a short or long rest before you can use it again. 
      
      Starting at 17th level, you can use it twice before a rest, but only once on the same turn.
      
  - name: Ability Score Improvement
    lvl: 4
    desc: |
      When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
      
  - name: Extra Attack
    lvl: 5
    desc: |
      Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.
      
      The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.
      
  - name: Ferocious Charger
    lvl: 7
    desc: |
      At 7th level, you gain additional benefits when you using the cavalry charge maneuver. You can expend up to two superiority dice on the attack, adding both to the damage roll. If you spend two dice, the target has disadvantage on its Strength saving throw and is knocked 15 ft on failure.
      
      In addition, you gain one additional superiority die.

  - name: <>sub feature
    lvl: 7

  - name: Indomitable
    lvl: 9
    desc: |
      Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.

  - name: <>sub feature
    lvl: 10
      
  - name: Mounted Superiority
    lvl: 10
    desc: |
      At 10th level, your superiority dice turn into d10s. 
      
      At 18th level, they turn into d12s, and you gain one additional superiority die.

  - name: <>sub feature
    lvl: 15

  - name: <>sub feature
    lvl: 18

---
