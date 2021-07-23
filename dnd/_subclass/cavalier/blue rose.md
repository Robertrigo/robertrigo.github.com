---
class: Cavalier
name: Order of the Blue Rose
selector: blue_rose
blurb: The cavaliers of the order of the blue rose dedicate themselves to promoting peace in the lands they roam.

description: |
  The cavaliers of the order of the blue rose dedicate themselves to promoting peace in the lands they roam. Skilled warriors and adept diplomats, these cavaliers counsel wisdom, patience, and understanding, but are ever mindful of the need to take up arms to strike down aggressors, tyrants, or evil usurpers. Although they believe wholeheartedly in peace as an aim and a final goal, cavaliers of the blue rose are warriors first, and embrace their role as guardians of those who cannot or will not take up arms to defend themselves.
  
  ### Edicts
  Cavaliers of the Blue Rose share the following edicts.
  - The cavalier must guard against needless violence, protecting both the land and its people from wars they neither started nor wish to fight. 
  - He must seek to stop conflict with a minimum of bloodshed, to encourage peaceful resolutions to disagreements between intelligent creatures, and to mend the wounds opened by battle.
  - He must also honor quarter when he gives it, protecting captives who have surrendered from his own allies if need be.

# A '<>' before the name will keep the feature from becoming link
#   use if the feature is repeated
level:
  - lvl: 2
    order: 2nd
    features: Challenge, Bonus Proficiency
  - lvl: 7
    order: 7th
    features: Flat of the Blade
  - lvl: 10
    order: 10th
    features: Calming Them Down
  - lvl: 15
    order: 15th
    features: Inner Peace
  - lvl: 18
    order: 18th
    features: <>Challenge, Shield of Blades

features:
  - name: Challenge
    lvl: 2  
    desc: |
      Whenever you issue a challenge, you receive a +1d4 bonus on attack rolls made against the target of your challenge, if the target is an intelligent creature to whom you offered the chance to surrender (by taking an action to offer terms).

      At 18th level, you have advantage on attack rolls against that target as well.

  - name: Bonus Proficiency
    lvl: 2  
    desc: |
      You gain proficiency in the History skill.

      Additionally, whenever you make a Charisma check to mediate a dispute between two parties that do not include you, your proficiency bonus is doubled if it applies to the check.

  - name: Flat of the Blade
    lvl: 7
    desc: |
      At 7th level, you gain the ability to moderate your attacks in order to take an enemy alive. You take any penalties for attempting to subdue an opponent. Whenever you reduce a creature to 0 hit points with a melee attack, you can use a bonus action to instead leave the creature at 1 hit point.

      The creature is frightened of you for a number of minutes equal to your Charisma modifier. It must also make a Charisma saving throw with a DC 8 + your Charisma modifier + your proficiency modifier. If the creature fails this saving throw, it answers truthfully any questions you ask it and obeys your direct orders while it is frightened by this effect.

      When you make use of this ability on a foe dealing lethal damage, or allowing your allies to kill the target, is considered a violation of your edicts. Once you use this ability, you can't use it again until you finish a short rest.

  - name: Calming Them Down
    lvl: 10
    desc: |
      From 10th level, you can duplicate the effects of the *calm emotions* spell. Use the result of a Charisma (Persuasion) check as the DC. Once you use this ability, you can't use it again until you finish a long rest.

  - name: Inner Peace
    lvl: 15
    desc: |
      You have learned that while not all things in the world will go as you wish, you must remain calm and centered.

      Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can't use it again until you finish a long rest.

  - name: Shield of Blades
    lvl: 18
    desc: |
      At 18th level, you gain an expert sense of impending violence around you. When taking the Dodge action, you can extend your protection to those around you. Until the start of your next turn, your adjacent allies bonuses are considered as if they had taken the Dodge action.

      In addition, while dodging, when an attacker that you can see hits you or an adjacent ally with an attack, you can use your reaction to halve the attack's damage.

---
