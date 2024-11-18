for(let i=0;i<=10;i++){
    console.log(`print the value of ${i}`);
    
}

//first in Initialization , then condition check then Increment/Update 


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}


for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping", i);
        continue; // Skip this iteration
    }
    if (i === 8) {
        console.log("Breaking at", i);
        break; // Exit the loop
    }
    console.log("Number:", i);
}
// Output:
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Skipping 5
// Number: 6
// Number: 7
// Breaking at 

// continue =>Skips the rest of the current iteration and moves to the next iteration.
//break =>

//     Feature	break	continue
// Purpose	Ends the loop entirely.	Skips the rest of the current iteration.
// Loop Execution	Stops the loop completely.	Continues with the next iteration.
// Use Case	Exit when a specific condition is met.	Skip unwanted iterations.