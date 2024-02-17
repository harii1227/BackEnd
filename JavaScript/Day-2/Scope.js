/**
 * GLOBAL SCOPE
 */

var name =" raman "
console.log(name);

function func(){
    console.log(name)
}
func()

/**
 * LOCAL/FUNCTION SCOE
 */

function func(){
    var num = 55
    console.log(num)
}
func();
// console.log(num)    ---num is locally decleared so uit not acces the num thats why give the error

/**
 * BLOCK SCOPE/LOCAL SCOPE
 */

{
    let x=90;   //let is used in block scope
    console.log(x)
}
// console.log(x)