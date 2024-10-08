// stack memory block main value is always present in in selfname at any condition in stack memory

/*let selfname =" kartik kaushik"

let anothername = selfname
anothername = "ankur"
console.log(selfname)
console.log(anothername)*/
// heap memory concept refernce value is taken not copy for eg if we change one value to another by pass it will change 

let userone = {
    email: "kartiikkaushik.com",
    upi: "kartikybl.com"

}
let usertwo = userone
usertwo.email ="subhashgosmwami.com"
console.log(usertwo.email)
console.log(userone.email)



