"use strict";

class Fighter {
    constructor(name, power = 10, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health = this.health - damage;
        console.log(`${this.name}\`s health: ${this.health}`);
    }

    hit(enemy, point) {
        enemy.setDamage(this.power * point)
    }
}

class ImprovedFighter extends Fighter {
    doubleHit(enemy, point) {
        super.hit(enemy, 2*point);
    }
}

function fight(fighter, improvedFighter,  ...point) {

    console.log(`${fighter.name}    power: ${fighter.power}    health: ${fighter.health}`);
    console.log(`${improvedFighter.name}    power: ${improvedFighter.power}    health: ${improvedFighter.health}`);
    console.log(''); console.log('');

    for (let i = 0, n = point.length; i < n; i++) {

        console.log(`ROUND ${i+1}    POINTS: ${point[i]}`);

        console.log(`${fighter.name} hits ${point[i] * fighter.power}`);
        fighter.hit(improvedFighter, point[i]);

        if (improvedFighter.health <= 0) {
            console.log(''); console.log('');
            console.log(`${improvedFighter.name} DEAD`);
            console.log(`${fighter.name} win with health: ${fighter.health}`);
            break;
        }

        console.log(`${improvedFighter.name} hits ${point[i] * improvedFighter.power}`);
        improvedFighter.doubleHit(fighter, point[i]);

        if (fighter.health <= 0) {
            console.log(''); console.log('');
            console.log(`${fighter.name} DEAD`);
            console.log(`${improvedFighter.name} win with health: ${improvedFighter.health}`);
            break;
        }

        console.log('');

        if (i === n-1) {
            console.log(''); console.log('----------------');
            console.log(`${fighter.name} and ${improvedFighter.name} SURVIVED :)`);
        }
    }
}

// Эта функция взята с интернета - добавляет динамичность игре :)
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}


let fighter = new Fighter('Cat', randomInteger(10, 20), randomInteger(500, 700));
let improvedFighter = new ImprovedFighter('Dog', randomInteger(4, 13), randomInteger(400, 800));


fight(fighter, improvedFighter, randomInteger(1, 45), randomInteger(1, 5), randomInteger(5, 13), randomInteger(13, 45));
