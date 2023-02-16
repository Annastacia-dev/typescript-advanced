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
