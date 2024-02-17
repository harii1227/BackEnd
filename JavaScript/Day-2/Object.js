const user = {
    name : "raman",
    age : 99,
    city  : "noida"
}


//Accessing the data
console.log(user.name)
console.log(user['name'])


/**
 * Adding data to the object
 */

user.country = "india";
user["continent"] = "Asia";
console.log(user)


// /**
//  * DELETING OBJECT KEYS ANS OBJECT ITSELF
//  */
// delete user.country
// console.log(user)

// delete user['continent']
// console.log(user)



let person = {
    name : "raman",
    age : 99,
    address : {
        city : "Noida",
        state : "up",
        country : "india"

    }
}

for(let key in person){
    console.log(key, "=>", person[key])
}

console.log(Object.keys(person))
console.log(Object.values(person))

//get bothe keys and the values
console.log(Object.entries(person))


/**
 * CLONIG AN OBJECT USING ASSIGN
 */
const new_person = Object.assign({}, person)
console.log(new_person)

const new_person_1 = Object.assign({}, person, {role : "developer"})
console.log(new_person_1)