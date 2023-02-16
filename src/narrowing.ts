// Narrowing is the process of removing types from a union type
function detectType(val: number| string){
    if(typeof val === 'number'){
        return val + 3
    }
    return val.toUpperCase();
}

function detectTypeTwo(id: string | null){
    if(!id){
        return 'No ID';
    }
    return id.toLowerCase();
}

// The in operator

interface NewUser {
    id: string
    name: string
}

interface NewAdmin {
    id: string
    name: string
    role: string
}

function redirect(user: NewUser | NewAdmin){
    if('role' in user){
        return `/admin/${user.id}`
    }
    return `/user/${user.id}`
}

const newUser = {
    id: '123',
    name: 'Luke',
}

const newAdmin = {
    id: '123',
    name: 'James',
    role: 'admin',
}

console.log('redirect user:',redirect(newUser));
console.log('redirect admin:',redirect(newAdmin));



// The instanceof operator and type predicates

class AppUser {
    constructor(
        public id: string,
        public name: string,
    ){}
}

class AppAdmin {
    constructor(
        public id: string,
        public name: string,
        public role: string,
    ){}
}

// instance of

function logUser(val: AppUser | AppAdmin){
    if(val instanceof AppAdmin){
        return `Welcome ${val.name}! You are an admin.`
    }
    return `Welcome ${val.name}! You are a user.`
}

const appUser = new AppUser('123', 'Luke');
const appAdmin = new AppAdmin('123', 'James', 'admin');

console.log('log user:',logUser(appUser));
console.log('log admin:',logUser(appAdmin));

// type predicate 

type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return 'fish food'
    } else {
        pet
        return 'bird food'
    }
}

const fish = { swim: () => console.log('swimming') }
const bird = { fly: () => console.log('flying') }

console.log('get fish food:',getFood(fish));
console.log('get bird food:',getFood(bird));

// Discriminated Unions

interface Circle {
    kind: 'circle'
    radius: number
}

interface Square {
    kind: 'square'
    sideLength: number
}

interface Rectangle {
    kind: 'rectangle'
    width: number   
    height: number
}



type Shape = Circle | Square | Rectangle

function getArea(shape: Shape){
    switch(shape.kind){
        case 'circle':
            return Math.PI * shape.radius ** 2
        case 'square':
            return shape.sideLength ** 2
        case 'rectangle':
            return shape.width * shape.height
    }
}

const circle: Circle = { kind: 'circle', radius: 10 }
const square: Square = { kind: 'square', sideLength: 10 }
const rectangle: Rectangle = { kind: 'rectangle', width: 10, height: 20 }

console.log('circle area:',getArea(circle));
console.log('square area:',getArea(square));
console.log('rectangle area:',getArea(rectangle));







