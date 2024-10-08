// string interpulation modern technique of adding strings
/*const yname ="kartik"
const loss =50

console.log(`hellomynameis${yname} and my loss is ${loss}`)*/
// new method of declaration of string and these are string prototypes
const yname = new String("kartik-kaushik")
console.log(yname.length)

console.log(yname.toLocaleLowerCase())
console.log(yname.charAt(2))
const newname = yname.substring(2,4)
console.log(newname)
const bname ="     kartik"
console.log(bname)
console.log(bname.trim())
const url ="kartikhttps%20gmail"
console.log(url.replace("%20"))
console.log(url.includes("p"))
console.log(yname.split("-"))