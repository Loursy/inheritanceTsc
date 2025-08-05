function getFirstElement<T>(array: T[]) {
    return array[0]
}

const numbers = [2,6,8]
const first = getFirstElement(numbers)
console.log(first)

const strings = ["a","b","c"]
const firstStr= getFirstElement(strings)
console.log(firstStr)

const map = new Map<string,number>([["abc",1],["def",2]])
map.set("xyz",3)
console.log(map)