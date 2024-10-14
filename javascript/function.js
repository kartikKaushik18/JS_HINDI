function myname(){
console.log("k")
console.log("k")
console.log("k")
console.log("k")
console.log("k")
}
myname()
function addtwonumbers(num1,num2){
let result =num1+num2
return result


}
addtwonumbers(8,9)
const result =addtwonumbers(8,9)
console.log(result)
function justlogedin(username ='sam'){
if(!username){
console.log(" please enter your name")
//return

}


    return `${username} justlogedin`

}
console.log(justlogedin())
function cartshoping(...usernames){
return usernames

}
console.log(cartshoping(" kartik kaushik"," kunal"," mannn singh"))
const user ={
    firstname:"hello",
    lastname:"hi"
}
function objectpassing(anyobject){
console.log(`${anyobject.firstname},${anyobjectlastname}`)
return anyobject
}
//another method
objectpassing({
    firstname:"kartikkaushik",
    lastname :"ankur"
})
console.log()