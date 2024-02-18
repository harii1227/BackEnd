//   function operation(operatorFn , a,b){
//     return operatorFn(a,b)
//   }

//   function add(a,b){
//     return a+b;
//   }
//   let result = operation(add, 5,6)
//   console.log(result);


function getGreedMethod(){
    return function(){
        console.log("hello baby")
    }
}
let greedFn = getGreedMethod()
console.log(typeof greedFn)
greedFn()