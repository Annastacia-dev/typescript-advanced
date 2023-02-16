"use strict";
// Narrowing is the process of removing types from a union type
function detectType(val) {
    if (typeof val === 'number') {
        return val + 3;
    }
    return val.toUpperCase();
}
function detectTypeTwo(id) {
    if (!id) {
        return 'No ID';
    }
    return id.toLowerCase();
}
function redirect(user) {
    if ('role' in user) {
        return `/admin/${user.id}`;
    }
    return `/user/${user.id}`;
}
const newUser = {
    id: '123',
    name: 'Luke',
};
const newAdmin = {
    id: '123',
    name: 'James',
    role: 'admin',
};
console.log('redirect user:', redirect(newUser));
console.log('redirect admin:', redirect(newAdmin));
// The instanceof operator and type predicates
class AppUser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class AppAdmin {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}
// instance of
function logUser(val) {
    if (val instanceof AppAdmin) {
        return `Welcome ${val.name}! You are an admin.`;
    }
    return `Welcome ${val.name}! You are a user.`;
}
const appUser = new AppUser('123', 'Luke');
const appAdmin = new AppAdmin('123', 'James', 'admin');
console.log('log user:', logUser(appUser));
console.log('log admin:', logUser(appAdmin));
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'fish food';
    }
    else {
        pet;
        return 'bird food';
    }
}
const fish = { swim: () => console.log('swimming') };
const bird = { fly: () => console.log('flying') };
console.log('get fish food:', getFood(fish));
console.log('get bird food:', getFood(bird));
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}
const circle = { kind: 'circle', radius: 10 };
const square = { kind: 'square', sideLength: 10 };
console.log('circle area:', getArea(circle));
console.log('square area:', getArea(square));
// Never Type + Exhaustive Checks
function getAreaTwo(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        default:
            const _exhaustiveCheck = shape; // if we add a new shape, we will get an error here
            return _exhaustiveCheck;
    }
}
const rectangle = { kind: 'rectangle', width: 10, height: 10 };
console.log('rectangle area:', getAreaTwo(rectangle));
