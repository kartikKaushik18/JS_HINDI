/*const addtwo =(num1,num2) =>{
    return num1+num2
}
console.log(addtwo(3,4))
// const addtwo =(num1,num2) => (num1+num2 )implicit function useful in react
//const addtwo =(num1,num2) =>( { : }) in case of object to this method
const chai =() =>{
    login = " kartik kaushik"
    console.log(this)// to check scope 
}

chai()*/
// IIFE to overcome the global space problem 
/*(function chaiiii(){

console.log(" kartik");

})();*/

function hello(){
    console.log("hello")
}
hello();

(function chaiiii(){

    console.log(" kartik");
    
    })();
// arrow using IIFE
((name)=>{

    console.log(`db is connected ${name}`)
})('kaushik');









