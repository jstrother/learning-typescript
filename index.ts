export {};

let message = 'Hello, World';

console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Jim';

let sentence: string = `My name is ${name}.
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Jim', 41];

enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Jim';

let myVariable1: any = 10;
// console.log(myVariable1.name);
// myVariable1(); throws error, but meant to illustrate that you can attempt to call type any as a function even if it isn't, while type unknown prevents this
// myVariable1.toUpperCase(); same with methods

let myVariable2: unknown = 10;

function hasName(obj: any): obj is {name: string} {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myVariable2)) console.log(myVariable2.name);

// myVariable2(); throws error, but meant to illustrate that you can attempt to call type any as a function even if it isn't, while type unknown prevents this
// (myVariable2 as string).toUpperCase();

let a;  // with no type declaration, a can be anything at all at any time it is reassigned
a = 10;
a = true;

let b = 20;
// b = true; throws error as Typescript infers that b is a number from the delaration statement

let multiType: number | boolean; // type union
multiType = 20;
multiType = true;

function add(num1: number, num2?: number): number {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 10);
// add(5, '10'); throws error as the second parameter is not of type number

add(5); // the ? in num2 above allows this function to be called with just one of two parameters, otherwise Typescript will throw an error assuming that all parameters are required

function add2(num1: number, num2: number = 10): number {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5);

interface Person {
    firstName: string;
    lastName: string;
    // these can be optional using ?
}

// function fullName(person: {firstName: string, lastName: string}) {
//     console.log(`${person.firstName} ${person.lastName}`)
// }

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullName(p);

class Employee {
    public employeeName: string;
    // public is default/inferred and is also accessible anywhere in program
    // private restricts access and prevents accessibility from outside class
    // protected restricts access and prevents accessibility from outside class or any classes extended from it

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good morning, ${this.employeeName}`);
    }
}

class Manager extends Employee {
    constructor(mangerName: string) {
        super(mangerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let emp1 = new Employee('Jim');
console.log(emp1.employeeName);
emp1.greet();

let m1 = new Manager('Deb');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);