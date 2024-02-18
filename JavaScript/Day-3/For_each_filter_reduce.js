/**
 * forEach Method
 */
players = ["sachin", "rohit","virat","surya"];

players.forEach((players)=>console.log(players))

/**
 * map ->creation of neww transformed array
 */

arr = [1,2,3,4,5,6]
cube_arr=arr.map(num => num**3)
console.log(cube_arr)
console.log(arr)


/**
 * FILTER -> 
 */

let arr1 =[1,2,3,4,5]

let even_arr=arr1.filter((num) => num%2==0)
console.log(even_arr)

/**
 * REDUCE
 */

const sum=arr3 =[1,2,3,4,5,6,8].reduce((curr,next) => curr+next)
console.log(sum)