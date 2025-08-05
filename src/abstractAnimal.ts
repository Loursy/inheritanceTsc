import { iAnimal } from "./iAnimal"

export abstract class abstractAnimal implements iAnimal {
    name: string
    weight: number
    age: number

    constructor(name: string, weight: number, age: number) {
        this.name = name;
        this.weight = weight;
        this.age = age;
    }

    abstract makeSound() : void|string ;
}