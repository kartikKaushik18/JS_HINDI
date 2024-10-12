// array push ,conacat,spread,flat
const array1 =[1,2,3,4,5,6,7,8]
const array2 =[9,1,2,3,4,5,6,7,78]
const array5 =['a','b','c']
// array1.push(array2)
//console.log(array1)
const array3 =array1.concat(array2)
console.log(array3)
const array4 =[...array1,...array2,...array5]
console.log(array4)
const array6 = [3,4,5,6,7,78,[3,2,2,5,6,[2,3,4]]]
const array7 =array6.flat(Infinity)
console.log(array7)