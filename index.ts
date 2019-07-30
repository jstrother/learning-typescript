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
console.log(myVariable1.name);
myVariable1();
myVariable1.toUpperCase();

let myVariable2: unknown = 10;

function hasName(obj: any): obj is {name: string} {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myVariable2)) console.log(myVariable2.name);

// myVariable2(); throws error, but meant to illustrate that you can attempt to call type any as a function even if it isn't, while type unknown prevents this
(myVariable2 as string).toUpperCase();