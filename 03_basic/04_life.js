// Immediately Invoked Function Expressions (IIFE)
//()() => one for defination and one use for call 
//An IIFE is a function that runs as soon as it is defined. 
//It is often used to create a private scope or to execute code immediately without polluting the global scope.

(function babita(){
    //named IIFE
    console.log('am in funtion');
    
})(); // semicolne use for stop invoke the funtion context

(()=>{
    console.log('am in arrow funtion');
})();

((name)=>{   console.log(`am in arrow funtion ${name}`);})("babita");

var message = "Hello am ";
(function () {
    var message = "Hello"; // Private to this IIFE
    console.log(message);  // Output: "Hello"
  })();
  
  console.log(message); 