/**
 * Bring the logic of adding two num
 */

// const add = require("./myModule.js")
// console.log(add(5,6))


const operations = require("./myModule.js")
console.log(typeof operations)
console.log(operations)

console.log(operations.add(5,6))
console.log(operations.product(5,6))