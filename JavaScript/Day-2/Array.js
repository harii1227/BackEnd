// //storing the data in ordered way in contigious memory location

// /**arr =[1,2,3,4,56,232,56,323,34];
// console.log(typeof arr)

// arr1=new Array()
// console.log(typeof arr1)
// console.log(arr1)**/


// arr =[1,2,3,4,56,232,56,323,34];
// console.log(arr[0])
// console.log(arr[7])
// console.log(arr[32])   // it gives notdefined
// console.log(arr[-1])   // it gives notdefined

// /**
//  * ARRAY ARE MUTABLE
//  */
// arr[1]=200;
// console.log(arr)

// /**
//  * INSERT ITEM IN THE ARRAY
//  */

// arr =[3,4,5,6,7];
// console.log(arr)

// arr.push(11)
// console.log(arr)

// arr.push(99,554,34)
// console.log(arr)

// /**
//  * UNSHIFT METHOD
//  */
// arr.unshift(999)
// console.log(arr)

// arr.unshift(999,434,3422)
// console.log(arr)




// /**
//  * REMOVE THE ELEMENT
//  */

// let arr =[1,3,4,5,3,23]
// console.log(arr.pop())   //remove last element
// console.log(arr)


// //shift
// console.log(arr.shift())
// console.log(arr)


// //concat

// let a1=[1,2,3,22]
// let a2=[5,42]

// let r =a1.concat(a2)
// console.log(r)



// //LENGTH
// console.log(a1.length)




// //CONVERT ARRAY INTO STRING

// chr_arr =['r','a','m','a','n'];

// //JOIN
// console.log(chr_arr.join())
// console.log(chr_arr.join(""))
// console.log(chr_arr.join('$'))

// console.log(typeof chr_arr.toString())



// /**
//  * SLICING OF THE ARRAYS
//  */

// let num =[3,4,5,6,55,23,342,231,40,53,211]
// console.log(num.slice(2))
// console.log(num.slice(2,7))
// console.log(num.slice(5,-1))
// console.log(num.slice(-9,-2))
// console.log(num.slice(2,-1))

// console.log(num)




// /**
//  * SpLICING , WHICH MODIFIES THE GIVEN ARRAY
//  */
// let numbers = [1,2,3,4,5]
// // let removed = numbers.splice(2,3)
// let removed= numbers.splice(2,2,21,233,321,121)
// console.log(removed)
// console.log(numbers)



// /**
//  * REVERSE OF AN ARRAY
//  */
// let nums= [1,2,4,3,21]
// nums.reverse()
// console.log(nums)

let nums =[1,2,3,4,5]
console.log(nums.indexOf(3))
console.log(nums.indexOf(30))




/**
 * SORTING OF ARRAY
 */
let my_arr =[13,2,34,21,20]
// my_arr.sort((a,b)=>a-b)      ASCENDING ORDER
// my_arr.sort((a,b) => b-a)    DECENDING ORDER
console.log(my_arr)