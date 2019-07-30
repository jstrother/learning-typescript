"use strict";
exports.__esModule = true;
var message = 'Hello, World';
console.log(message);
var isBeginner = true;
var total = 0;
var name = 'Jim';
var sentence = "My name is " + name + ".\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Jim', 41];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Jim';
var myVariable1 = 10;
// console.log(myVariable1.name);
// myVariable1(); throws error, but meant to illustrate that you can attempt to call type any as a function even if it isn't, while type unknown prevents this
// myVariable1.toUpperCase(); same with methods
var myVariable2 = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myVariable2))
    console.log(myVariable2.name);
// myVariable2(); throws error, but meant to illustrate that you can attempt to call type any as a function even if it isn't, while type unknown prevents this
// (myVariable2 as string).toUpperCase();
var a; // with no type declaration, a can be anything at all at any time it is reassigned
a = 10;
a = true;
var b = 20;
// b = true; throws error as Typescript infers that b is a number from the delaration statement
var multiType; // type union
multiType = 20;
multiType = true;
function add(num1, num2) {
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
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5);
// function fullName(person: {firstName: string, lastName: string}) {
//     console.log(`${person.firstName} ${person.lastName}`)
// }
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
