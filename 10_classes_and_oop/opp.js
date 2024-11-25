// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         console.log(`Username: ${this.username}`);
//         console.log(this);
//     }

// }

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);
function userinfo(username, email,address){
    this.username = username
    this.email = email
    this.address = address
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
}

let user1 = new userinfo("babita", "babita@gmail.com", "sikar")
let user2 = new userinfo("anil", "anil@gmail.com", "jjn")
console.log(user1.constructor);
console.log(user2, user1);


/*
new keyboard
1.new create empty {} new object
2.call constructor funtion  and give all agrument
3.this inject all values and give all 


*/