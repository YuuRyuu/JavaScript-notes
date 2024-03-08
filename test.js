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
