import { Bird } from "./bird"

const firstBird = new Bird("Şimşek",2.3,1)

console.log(firstBird.name)
console.log(firstBird.weight)
console.log(firstBird.age)
firstBird.makeSound();