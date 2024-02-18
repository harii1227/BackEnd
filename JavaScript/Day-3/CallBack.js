function greet(name, callback){
    const greeting = "Hello "+ name
    callback(greeting)
}

function displayGreeting(message){
    console.log(message)
}
greet("raman", displayGreeting)


/**
 * CALLBACK HELL / PYRAMID OF DOOM
 */

getUser(function(user){
    getPosts(user.id, function(post){
        displayUserInfoAndPost(user, posts, function(){
            console.log("user info ans posts successfully displayed")
        })
    })

})