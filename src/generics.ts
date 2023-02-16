// Generics are a way to create reusable components

const flowers: Array<string> = []
const scores: Array<number> = []

function identityOne(val: number | boolean): number | boolean {
    return val // val can be a number or a boolean
    //problem - we can't be sure what type val is
}

function identityTwo(val: any): any {
    return val // val can be anything
    //problem - we can't be sure what type val is
}

//solution - generics

function identityThree<Type>(val: Type): Type {
    return val // val can be anything of type Type
}

//Alternate syntax
// function identityThree<T>(val: T): T {
//     return val // val can be anything of type Type
// }

//Example

identityThree(3)
identityThree('hello')
identityThree(true)

//You can also specify the type of the generic

identityThree<number>(3)
identityThree<string>('hello')
//identityThree<boolean>(2) //error: Argument of type '2' is not assignable to parameter of type 'boolean'.




// Generics with interfaces

interface Chef {
    name: string
    cuisine: string
}

identityThree<Chef>({ name: 'Gordon Ramsay', cuisine: 'British' })


// Generics in Arrays & Arrow Functions

//taking input as an array of any type

function getArray<T>(arr: T[]): T {
    return arr[0]
}

// arrow function

const getArrayTwo = <T>(arr: T[]): T => arr[0]

// Alternate syntax

const getArrayThree = <T,>(arr: T[]): T => arr[0] // the comma after T is optional, indicates that it is not a tag

// Generics with Classes


