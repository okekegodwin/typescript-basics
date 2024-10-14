// class Person {
//   readonly name: string;
//   private age: number;
//   protected profession: string;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     this.profession = "Software Engineer";
//   }

//   sayHello(): void {
//     console.log("Hello")
//   }
// }

class Person {
  protected profession: string;

  constructor(readonly name: string, private age: number) {
    this.name = name;
    this.age = age;
    this.profession = "Software Engineer";
  }

  sayHello(): void {
    console.log("Hello")
  }

  getAge() {
    return this.age
  }

  setAge(age: number) {
    this.age = age
  }
}


class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
    this.profession = "Pharmacist"
  }
}

let firstPerson = new Person("Peter", 32);
console.log(firstPerson);
console.log(firstPerson);

firstPerson.setAge(20)
console.log(firstPerson)
// firstPerson.name = "Lionel" // it can only be read, but can't be updated
// console.log(firstPerson.age) // it is only available within the Person class

let firstStudent = new Student("Loveth", 22);
console.log(firstStudent);
console.log(firstStudent.getAge());


// Interface
interface ICar {
  model: string;
  color: string;
  speed: number;
  drive(): void;
  increaseSpeed(speed: number): number;
}

class Car implements ICar {
  constructor(public model: string, public color: string, public speed: number) {
    this.model = model;
    this.color = color;
    this.speed = speed;
  }

  drive(): void {
    let speed = this.speed;
    console.log("Car is driving at " + speed + "kph")
  }

  increaseSpeed(speed: number): number {
    return speed += this.speed;
  }
}

class Toyota extends Car {
  constructor(model: string, color: string, speed: number) {
    super(model, color, speed);
  }
}

let toyota = new Toyota("Supra", "blue", 255);
console.log(toyota)

toyota.drive();
console.log(`Toyota ${toyota.model} is driving at ${toyota.increaseSpeed(45)}kph`);

// interface as a variable type
interface IShape {
  length: number;
  height: number;
}

let cube: IShape = {length: 10, height: 20}
console.log(cube)

// interface as a function parameter
function createShape(options: IShape): IShape {
  return { length: options.length, height: options.height}
}
console.log(createShape({ length: 23, height: 13}))

// interface as an array type
const shape : IShape[] = []

shape.push({length: 23, height: 14}, {length: 19, height: 78});
console.log(shape)

shape.forEach(shapes => {
  const area = shapes.length * shapes.height
  console.log(area)
});


// Enum
enum Colors {
  RED, // 0
  BLUE, // 1
  GREEN // 2
}
console.log(Colors.BLUE)

enum OrderStatusEnum {
  pending = "pending_order",
  accepted = "accepted_order",
  devlivered = "devlivered_order"
}
let OrderStatus = OrderStatusEnum.pending

if (OrderStatus === OrderStatusEnum.pending) {
  console.log(OrderStatusEnum.pending)
}

// Generics
const createGenericObjects = <S, N>(value1:S, value2:N) => {
  return [value1, value2]
}
console.log(createGenericObjects<string, string>("James", "Peter"));
console.log(createGenericObjects<number, string>(45, "Bieber"))
console.log(createGenericObjects<boolean, number>(false, 33))