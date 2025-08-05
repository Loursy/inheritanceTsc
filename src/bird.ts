import  { abstractAnimal } from "./abstractAnimal"

export class Bird extends abstractAnimal {
    makeSound(): void {
     console.log("Bird says: Cik cik");
    }
}