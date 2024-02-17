//  -------------------------------------------------------------
/**
 * VAR:   
 *      1.used to define a variable 
 *      2.it has a function scope no block scope
 *      3.it is hoisted
 */


// function f1(){
//     var i=5    //function/local scope
//     console.log(i)
// }
// f1()
// console.log(i)


// {
//     var i=5
// }
// console.log(i)


// ------------------------------------------------------------------------------------
/**
 * LET:
 *      1.no hoisted
 *      2.it has block scope
 */


// console.log(i)
// let i=5

// {
//     let name=("raman")
// }
// console.log(name)   // name is block space not access outside the curly bracket


// ---------------------------------------------------------------------------------------------
/**
 * CONST
 *      1.scope is ecactly same as let
 *      2.const variables are final , can't be re-assigned a value
 */

const country = "india";
country = "USA"   // NOT UPDATED DUE TO CONSTANT VARIABLE 