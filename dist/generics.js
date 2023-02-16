"use strict";
// Generics are a way to create reusable components
const flowers = [];
const scores = [];
function identityOne(val) {
    return val; // val can be a number or a boolean
    //problem - we can't be sure what type val is
}
function identityTwo(val) {
    return val; // val can be anything
    //problem - we can't be sure what type val is
}
//solution - generics
function identityThree(val) {
    return val; // val can be anything of type Type
}
//Alternate syntax
// function identityThree<T>(val: T): T {
//     return val // val can be anything of type Type
// }
//Example
identityThree(3);
identityThree('hello');
identityThree(true);
//You can also specify the type of the generic
identityThree(3);
identityThree('hello');
identityThree({ name: 'Gordon Ramsay', cuisine: 'British' });
// Generics in Arrays & Arrow Functions
//taking input as an array of any type
function getArray(arr) {
    return arr[0];
}
// arrow function
const getArrayTwo = (arr) => arr[0];
// Alternate syntax
const getArrayThree = (arr) => arr[0]; // the comma after T is optional, indicates that it is not a tag
// Type Paramaters in Generic Constraints - declare a type parameter that is constrained by another type parameter
//Syntax
function getProperty(obj, key) {
    return obj[key];
}
function getUserData(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
getUserData('John', { id: 1, name: 'John', password: '1234' });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
}
const quiz = new Sellable();
const course = new Sellable();
quiz.addToCart({ id: 1, name: 'JavaScript Quiz' });
course.addToCart({ id: 1, name: 'JavaScript Course', author: 'John' });
