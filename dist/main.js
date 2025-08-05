"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bird_1 = require("./bird");
const firstBird = new bird_1.Bird("Şimşek", 2.3, 1);
console.log(firstBird.name);
console.log(firstBird.weight);
console.log(firstBird.age);
firstBird.makeSound();
