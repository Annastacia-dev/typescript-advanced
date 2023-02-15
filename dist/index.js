"use strict";
// creating classes in typescript
class User {
    constructor(age, email) {
        // with a default value
        this.name = 'John Doe'; //initializing the property
        //readonly property
        this.city = 'New York';
        this.age = age;
        this.email = email;
    }
}
const user = new User(30, "anne@dev.to"); // this is an instance of the class
user.name = "Anne";
console.log(user);
