//----DESTRUCTURING OF ARRAY---------------

// const nums = [1,2,3]
// const [a,b,c] = [1,2,3]
// console.log(a)
// console.log(b)
// console.log(c)

// const [a,b] = [1,2,3]
// console.log(a)
// console.log(b)
// console.log(c)

// const [a,b,c,d] = [1,2,3]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// const[p,q,r] =[1,2,[4,5,6]]

// console.log(p)
// console.log(q)
// console.log(r)

//------------DESTRUCTURING OF OBJECT------------------------------

// const person={
//     AGE : 99,
//     name: "raman",
//     city : "noida"

// }
// const{name,AGE} =person
// console.log(name)
// console.log(AGE)
// console.log(hobby)

const client = {
  age: 99,
  name: "raman",
  address :{
    city: "noida",
    state : "up"
  } 
}
const {name, age, address :{city, state}} = client
console.log(name)
console.log(age)
console.log(city)
