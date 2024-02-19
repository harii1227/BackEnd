/**
 * Promices from mukhila
 */

//  //using new we will create new object
// const mukhilaPromise = new Promise((resolve, reject)=>{
//     let parentDecision =false;

//     if(parentDecision){
//         resolve("yayy, now ready for shaadi")
//     }else{
//         reject("papa ne ACHHA ladka dundh liya hai!, Sorry....")
//     }
// });  

// mukhilaPromise.then((msg)=>{
//     console.log("mukhila message : ", msg)
//     console.log("lets book the wedding venue")
// }).catch((msg)=>{
//     console.log("mukhila message : ",msg)
//     console.log("dusri wali dhudho yrr!")
// }).finally(()=> console.log("chlo life me clearity mili"))




// const f1Promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(Math.random()> 0.5){
//             resolve("friend1 : hey i am in for goa trip")
//         }else{
//             reject("friend1 : i am sorry for goa trip")
//         }
//     },1000)
// })

// const f2Promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(Math.random()> 0.5){
//             resolve("friend2 : hey i am in for goa trip")
//         }else{
//             reject("friend2 : i am not able to goa")
//         }
//     },2000)
// })

// const f3Promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(Math.random()> 0.5){
//             resolve("friend3 : hey i am in for goa trip")
//         }else{
//             reject("friend3 : i am sorry for goa trip")
//         }
//     },3000)
// })

// Promise.all([f1Promise,f2Promise,f3Promise]).then((msg)=>{
//     console.log(msg)
//     console.log("yay we are going goa !")
// }).catch((msg)=>{
//     console.log("yaar bnd kro goa ka plan")
// })





const gf1Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()> 0.5){
            resolve("gfriend1 : hey i will come for dinner")
        }else{
            reject("gfriend1 : i am sorry for dinner")
        }
    },2000)
})

const gf2Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()> 0.5){
            resolve("gfriend2 : hey i will come for dinner")
        }else{
            reject("gfriend2 : i am not able to come in dinner")
        }
    },2000)
})

const gf3Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()> 0.5){
            resolve("friend3 : hey i will come for dinner")
        }else{
            reject("friend3 : no im not coming in dinner")
        }
    },3000)
})

Promise.any([gf1Promise,gf2Promise,gf3Promise]).then((result)=>{
    console.log(result)
    console.log("my velentine day is sorted !")
}).catch((msg)=>{
    console.log(msg)
    console.log("sara mood khrab ho gya yaar")
})