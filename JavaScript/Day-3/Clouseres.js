// function hello(){
//     let name = 'raman'
//     console.log(name)

// }
// hello()
// console.log(name)

function  outerFn(){
    let outerVar = " i am from outer fn"
    function innerFn(){
        console.log(outerVar)
}
return innerFn
}
let fn = outerFn()
fn()




function customerCounter(){
    let count = 0;
    return function(){
        count++;
        console.log("new customer is " , count)

    }
}
let counter =customerCounter() 

counter()
counter()
counter()
