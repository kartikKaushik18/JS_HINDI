// using literals
const mysym =Symbol("key1")
const user ={
name:"kartik kaushik",
[mysym]:  "key1",
"email":"kartikkaushik@googlecom",
age:20
}
//console.log(user.name)
//console.log(user["email"])
//console.log(user.age)
//console.log(user[mysym])
user.email="kartik@"
//Object.freeze(user)
usermail ="dev"
//console.log(user)

user.greetings =function(){

console.log(" hello js family ")

}
user.greetingsecond =function(){
console.log(`hello",${this.name}`)

}
console.log(user.greetings())
console.log(user.greetingsecond())


