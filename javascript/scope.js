var b =300
let c =400
if(true){

    var b =80;
    //const a =10;
    let c =30;
    console.log(c)
}
console.log(b)
console.log(c)
//nested functions
function login(){
const username = "kartik"

function anotherdetail() {
  const age =18
  const gender = "Male"
  console.log(username)
}
anotherdetail()
//console.log(age)

}
login()
if(true){
    const fname = " kaushik"
    if(fname === " kaushik"){
        const favgame ="cricket"
        const favmovie ="abcd"
         console.log(fname)
       console.log(favmovie)
    }
//console.log(favmovie)
}
console.log(addone(5))
function addone(num){
return num+1
}
// addtwo(5) wrong method in this case
const addtwo = function addone(num){
    return num+2
    }

console.log(addtwo(5))


