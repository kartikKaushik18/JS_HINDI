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

const kartik ={
    username:" dev ",
    age:29,
    fullname :{
      firstname : " subash",
      lastanme :" goswami"

    }
}
console.log(kartik.fullname.firstname)
const obj1 ={
  1:"a",
  2:"b",
  3:"c",
  4:"d"

}
const obj2 ={
  1:"f",
  2:"g",
  3:"h",
  4:"i"

}
console.log(obj2)
//merge two objects
const obj3 =Object.assign(obj1,obj2)
console.log(obj3)
const obj4 =Object.assign({},obj1,obj2)
console.log(Object.keys(kartik))
console.log(Object.values(kartik))
console.log(kartik.hasOwnProperty('age'))
