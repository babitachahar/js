let myDate = new Date()
// console.log(myDate);//2024-11-16T13:01:29.023Z
// console.log(myDate.toLocaleDateString());//11/16/2024
// console.log(myDate.toString());//Sat Nov 16 2024 13:01:29 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString());//2024-11-16T13:02:06.080Z

  //console.log(typeof myDate()); //object
  let myCreatedDate = new Date("01-14-2024")
  // console.log(myCreatedDate.toLocaleString());

   let myCreatedDateDate = new Date(2024, 3 ,4 ,9 ,20)
  // console.log(myCreatedDateDate.toLocaleDateString());
   



   let myTimeStamp = Date.now()
   console.log(myTimeStamp);
   console.log(myDate.getTime()); //output millisecond
   console.log(Math.floor(myDate.getTime()/1000));
   newDate.toLocaleString('default', {
    weekday: "long",
    
})
   