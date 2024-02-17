/**
 * function with no argument and no return  ARROW FUNCTION
 */
var hello = () => console.log("hello world");

hello()

/**
 * function with parameter
 */

var sum=(a,b) =>a+b;
console.log(sum(5,7));


/**
 * functiom with parameter , multiple lines of functuon body
 */

var process = (a,b) =>{
    console.log("need to process")
    return a*b;
}
console.log(process(5,6))


