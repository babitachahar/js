const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}


/*
this show the current Execution Context

1. this=> this keyword refers to the global window  object in the browser
2. this=> in this empty object in file
*/

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


function chat (){
    let username = "chat"
    // console.log(this.username); => here this.username value undefined
    
}
// chat()

function chat (){
    let username = "chat"
//console.log(this.username); => here give undefined

    
}

//chat()
/*+++++array function*/
const arrawfuntion = ()=>{
    let username = "chat"
console.log(this.username)
}
//arrawfuntion()

//basic arrow funtion

// const basic =(num1, num2)=>{
//     return num1+num2
    
// } ///Explicit return: 

// const basic =(num1, num2)=>  num1+num2 // Implicit return:  without  using return keyboard return value , Used in concise arrow functions without curly braces, 

const basic =(num1, num2)=>  (num1+num2) // ist also return Implicit return: am using here () this braces

console.log(basic(2,3));

const object =()=>({name:"baita"}) // return object with using key return keyboard Implicit return here () this braces

//console.log(object());



/* arrow vs noral (this context, arguments Object, Constructor Usage, Implicit Return:)

this Context:

Normal Function: this refers to the calling object.
Arrow Function: Inherits this from the surrounding lexical scope.
arguments Object:

Normal Function: Has its own arguments object.
Arrow Function: Does not have arguments, but you can use the rest parameter (...args).
Constructor Usage:

Normal Function: Can be used as a constructor with new.
Arrow Function: Cannot be used as a constructor.
Implicit Return:

Normal Function: Requires return for output.
Arrow Function: Supports implicit return for single-line expressions.
Method Usage:

Normal Function: Best for object methods.
Arrow Function: Not suitable as methods due to this binding.



*/


//this context
let userdetail ={
name:"babita",
printName: function printme() {
    console.log(`my name iis ${this.name}`); // 'this' refers to obj
    
}
} 

//userdetail.printName()/// if i write userdetail.printName its on refer the funtion for call using ()
let userdetailArrow ={
    name:"babita",
    printName: () =>{
        console.log(`my name iis ${this.name}`); //// 'this' does NOT refer to obj, it refers to the outer scope
        
    }
    }

    ////userdetailArrow.printName()/// output like this my name iis undefined

    
    //arguments Object
    function normal() { 
        console.log(arguments); //[Arguments] { '0': 1, '1': 2, '2': 4 } /// Logs all arguments
        
    }
   // normal(1,2,4)
    const arrow = (...args)=>{
     //console.log(arguments); dont have own Arguments
     console.log(args) //  Logs all arguments as an array
    }
   // arrow(1,2,3,5,6)

//Usage in Constructor
function Person(name) {
    this.name = name;
  }
  const person = new Person("John");
  console.log(person.name);   

  const Person1 = (name) => {
    this.name = name;
  };
  const person1 = new Person1("John");  // error occur Person1 is not a constructor

  //Implicit Return 