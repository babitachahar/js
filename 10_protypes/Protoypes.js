// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);
let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
Array.prototype.printMe = function(){
    console.log(`only acces by array `);
    
}
console.log(heroPower.hitesh(), myHeros.hitesh());
console.log(myHeros.printMe())
// heroPower.printMe() notess aceess by objects

String.prototype.trueLength = function(){
    console.log(`value of ${this}`);
    console.log(`true value of string is  ${this.trim().length}`);
    
}

let anotherUsername = "ChaiAurCode     "


anotherUsername.trueLength()
"anil".trueLength()
// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//Teacher.__proto__ = User
//console.log(Teacher.name);
//morden syntax
Object.setPrototypeOf(Teacher,User)
console.log(Teacher.name);