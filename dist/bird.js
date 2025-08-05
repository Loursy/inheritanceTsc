"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
const abstractAnimal_1 = require("./abstractAnimal");
class Bird extends abstractAnimal_1.abstractAnimal {
    makeSound() {
        console.log("Bird says: Cik cik");
    }
}
exports.Bird = Bird;
