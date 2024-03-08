let message
message = "hi";

console.log(message);

let user = {
    name: "John",
    age: 30, 
    "likes birds": true  // multiword property name must be quoted
};

delete user["likes birds"]; // remove property
delete user.age; // remove property

user.age = 25; // add property

// This is how we would normally create an object 
function makeUser(name, age) {
    return {
        name: name,
        age: age
    };
} 

// Using property value shorthand, we can do this instead
function makeUser(name, age) {
    return {
        name, // same as name: name
        age   // same as age: age
    };
}


