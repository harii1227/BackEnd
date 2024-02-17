//sequence of character always written inside single or double quotes

let name ='raman'
let city  =" noida"
console.log(name,city)
console.log(typeof name)

/**
 * accessing character based on index
 */

console.log(name[0]);
console.log(name[3]);

name[2]="z"    //immutable
console.log(name)

/**
 * LENGTH OF STRING
 */
console.log(name.length)

/**
 * CONCAT STRING
 */

let first_name = "raman";
let last_name= " rajput";

// let full_name= first_name.concat(last_name);    OR
let full_name= first_name+(last_name);

console.log(full_name);

/**
 * CHANGE TO UPPERCASE
 */
console.log(full_name.toUpperCase())

/**
 * CHAR AT ny index str[i]
 */
console.log(name.charAt(3))

/**
 * SLICING
 */
console.log(full_name)
console.log(full_name.slice(2))
console.log(full_name.slice(2,5))
console.log(full_name.slice(-5))
console.log(full_name.slice(-5,-1))


/**
 * indexOf
 */
console.log(name.indexOf('a'))  // it returns -1 if the character is not found in given statement

/**
 * trim
 */
let word = "mukhila"
console.log(word)
console.log(word.trim())

/**
 * split   //it gives array of character
 */
name = "raman rajput thakur"
console.log(name.split(" "))