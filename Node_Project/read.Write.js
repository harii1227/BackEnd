// /**
//  * Read from an extrnal file
//  */

// const fs = require('fs')
// // console.log(typeof fs) 

// /**
//  * Read in the sync way
//  */
// console.log("Before starting to read")

// //const content = fs.readFileSync("input.txt")   //reading in sync way


// //reading in async way
// fs.readFile('input.text',(err, content)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log("content of the file is :"+ content)
// })
// // console.log("output content is : "+ content)

// console.log("last line")


/**
 * Write the code to write to an external file
 */

// console.log("Befre")
// fs.writeFileSync('output1.txt', 'hello students!')
// console.log("after")

/**
 * asyncronousilly
 */
fs.writeFile('output2.txt', "hello again !", err =>{
    if(err){
        return console.log(err)
    }
    console.log('written successfully !')
})
console.log("After")