console.log("Hello world")

var firstname: string = "Godwin"
firstname = "Obiora"
console.log(firstname)

let bool: boolean = true
console.log(bool)

let numbers: Array<number> = [5, 20, 24, 33]
console.log(numbers)

let names: string[] = ["king", "dan", "glare"]
console.log(names)

let obj: {name: string, age: number, isMarried: boolean} = {name: "Godwin", age: 44, isMarried: false}
console.log(obj)

// mixed types or union type
let arrayOfMixedDataTypes: (string | number | boolean)[] = ["lampard", 12, "messi", true]
arrayOfMixedDataTypes.push(false)
console.log(arrayOfMixedDataTypes)

let person: string | number = "kingsley"
console.log(person)

person = 210202004
console.log(person)

// any
let arrayOfMixedDataTypes2: any[] = [49, "lier", true, ["hannah", "james"], {"name": "godwin", "age": 44}]
console.log(arrayOfMixedDataTypes2)

let person2 : any = "Godwin"
console.log(person2)

person2 = 210202007
console.log(person2)

// type aliases
type stringAndNumber = string | number 
let person3: stringAndNumber = "naomi"
console.log(person3)

person3 = 210202001
console.log(person3)

// functions
function add(number1: number, number2: number): number {
  return number1 + number2
}
console.log(add(4, 9));

function sayHello(): void {
  console.log("Hello Chief")
}
sayHello();

// addding optional parameter
function multiply(num1: number, num2: number, num3?: number) : number {
  return num1 * num2
}
let numbersToMultiply: number = multiply(4, 5)
console.log(numbersToMultiply)

function additon(firstNumber: number, secondNumber: number, thirdNumber: number = 10): number {
  return firstNumber + secondNumber + thirdNumber
}
console.log(additon(10, 20))