// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(receiveDamage){
        this.health -= receiveDamage;
    }
 }
 // Viking
 class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`;
    }
    battleCry(){
        return `Odin Owns You All!`
    }
 }
 // Saxon
 class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength);
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health >0){
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`
    }
 }
 // War
 class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
     }
    addViking(Viking){
        this.vikingArmy.push(Viking);
     }
    addSaxon(Saxon){
         this.saxonArmy.push(Saxon);

     }
    vikingAttack(){
        let indiceSaxon = Math.floor(this.saxonArmy.length * Math.random());
        let saxonRandom = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
        let vikingRandom = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
        
        saxonRandom.receiveDamage(vikingRandom.strength);
        
        if(saxonRandom.health <= 0){
            this.saxonArmy.splice(indiceSaxon,1);
            return `A Saxon has died in combat`
        }
    }
    saxonAttack(){
        let indiceViking = Math.floor(this.vikingArmy.length * Math.random());
        let saxonRandom = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
        let vikingRandom = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

        vikingRandom.receiveDamage(saxonRandom.strength);

        if(vikingRandom.health <= 0){
            this.vikingArmy.splice(indiceViking,1);
        }
        return vikingRandom.name + " has received " + saxonRandom.strength + " points of damage";
    }
    showStatus(){
        if(this.saxonArmy.length === 0 ){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        }
        return "Vikings and Saxons are still in the thick of battle."
    }
 }
