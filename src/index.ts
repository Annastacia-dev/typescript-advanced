// creating classes in typescript

class User {
    // with a default value
    name: string = 'John Doe';  //initializing the property
    // without a default value
    age: number;
    // optional property
    email?: string;
    //readonly property
    readonly city: string = 'New York';
    
    constructor(age: number, email?: string) {
        this.age = age;
        this.email = email;
    }
}

const user = new User(30,"anne@dev.to") // this is an instance of the class

user.name = "Anne";


console.log(user);



