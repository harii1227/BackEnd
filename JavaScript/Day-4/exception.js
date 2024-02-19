/**
 * Syntax related
 */
 //syntax error not allow to run program
// console.log("hello

//Runtime exceptions
/** 
let x =5
console.log(x.toUpperCase())**/


/**
 * Logical
 */
// let num =5
// for(i=-3;i<5;i++){
//     console.log(num/i)   //logical error is divided by zero
// }

try{
let obj = undefined

console.log(obj.name)
}catch(err){
    console.log("exception handle")
    console.log(err)
}
finally{
    console.log("i will always execute")
}