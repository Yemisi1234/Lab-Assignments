"use strict";
class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    run(speedIncrease) {
        this.speed += speedIncrease;
        console.log(`${this.name}'s increased speed is  ${this.speed}`);
    }
    static compareBySpeed(animal1, animal2) {
        return animal1.speed - animal2.speed;
    }
}
class Rabbit extends Animal {
    constructor(name, speed) {
        super(name, speed);
    }
    hide() {
        console.log(`${this.name}  hides `);
    }
}
const rabbit = new Rabbit("Bunny", 30);
rabbit.run(20);
rabbit.hide();
const animal1 = new Animal("Dog", 5);
const animal2 = new Animal("Lion", 7);
let comparison = Animal.compareBySpeed(animal1, animal2);
console.log(comparison);
