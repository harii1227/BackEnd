/**
 * Promices from mukhila
 */

 //using new we will create new object
const mukhilaPromise = new Promise((resolve, reject)=>{
    let parentDecision =false;

    if(parentDecision){
        resolve("now ready for shaadi")
    }else{
        reject("papa ne ACHHA ladka dundh liya hai!, Sorry....")
    }
});  

mukhilaPromise.then((msg)=>{
    console.log("mukhila message : ", msg)
    console.log("lets book the wedding venue")
}).catch((msg)=>{
    console.log("mukhila message : ",msg)
    console.log("dusri wali kha ho yrr!")
})