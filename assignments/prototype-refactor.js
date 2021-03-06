/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
Before:
function GameObject(gameObejectAttributes){
    this.createdAt = gameObejectAttributes.createdAt;
    this.dimensions = gameObejectAttributes.dimensions;
  }
  
  GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game`; 

  function CharacterStats(characterStatsAttribute){
    this.hp = characterStatsAttribute.hp;
    this.name = characterStatsAttribute.name; 
    GameObject.call(this, characterStatsAttribute); 
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype); 
  
  CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage`; 
  } 
  
  function Humanoid(humanoidAttributes){  
    this.faction = humanoidAttributes.faction; 
    this.weapons = humanoidAttributes.weapons; 
    this.language = humanoidAttributes.language; 
    CharacterStats.call(this,humanoidAttributes);
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype); 
  
  Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`; 
  }
  }
*/
//After:
class GameObject {
    constructor(gameObejectAttributes){
        this.createdAt = gameObejectAttributes.createdAt;
        this.dimensions = gameObejectAttributes.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game`;
    }
}

class CharacterStats extends GameObject {
    constructor (characterStatsAttribute){
        super(characterStatsAttribute);
        this.hp = characterStatsAttribute.hp;
        this.name = characterStatsAttribute.name;
    }
    takeDamage(){
        return `${this.name} took damage`;
    }
}

class Humanoid extends CharacterStats {
    constructor(humanoidAttributes){
        super(humanoidAttributes);
        this.faction = humanoidAttributes.faction;              
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language;
        
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`; 
    }
}

    
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      hp: 5,
      name: 'Bruce',
      faction: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      hp: 15,
      name: 'Sir Mustachio',
      faction: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      hp: 10,
      name: 'Lilith',
      faction: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.hp); // 15 (Not working)
    console.log(mage.name); // Bruce
    console.log(swordsman.faction); // The Round Table (Not working)
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  