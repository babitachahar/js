const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach((index)=>console.log(index)
// )


// const printme =(val)=>{
//     console.log(val);  
// }
// coding.forEach(printme)



// coding.forEach((item, index, arry)=>{console.log(item, index,arry);
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )