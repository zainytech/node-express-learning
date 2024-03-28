console.log("before setTimeout");

setTimeout(()=>{
    console.log("In setTimeout")
},2000)
//even if time is 0 it will still work same as of having 2 seconds
console.log("after setTimeout")
//it will exit the task not like setInterval