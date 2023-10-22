// let arr=[1,2,3,4,5,[6,7,8,[9,10,11]]];
// let nArray=arr.flat(2)
// console.log(nArray)
/// Flat method remove array and append in parent array to a certain depth....

// let arr=[1,2,3,4,5,[6,7,8,[9,10,11]]];
// console.log(arr.indexOf(4))
// /// Output: 4

// let arr=[1,2,3,4,5,[6,7,8,[9,10,11]]];
// console.log(arr.at(4))
// /// Output: 5

// let arr=[1,2,3,4,5,[6,7,8,[9,10,11]]];
// console.log(arr.includes(5,4))
//Check if array contain 5 .. will start searchung from 4rth index

// let arr=[1,2,3,4,5,[6,7,8,[9,10,11]]];
// console.log(arr.find(x=>x>1))
// Find first recurrence or return undefined.

// let arr=[1,2,3,4,5,[6,7,8,[9,10,11]]];
// console.log(arr.filter(x=>x>1))
// Find all pasing test or return [].

// let arr=[1,2,3,4,5];
// console.log(arr.map(x=>(x-10)))
// return modified array

// let arr=[1,2,3,4,5];
// console.log(arr.map(x=>{}))
// return modified array [undefined x 5]

// // How to return array from reduce method of js...
// // reduce(callback(total,currentValue),initial Value)
// let arr=[1,2,3,4,5,[4,7]];
// console.log(arr.flat().reduce((x,c)=>{
//   x=[...x,c]
//    return x;
// },[]))
// // reduce method return single value resulted from array...
// if initial value not provided x will be first element...

// Map vs Foreach...
// Map return new array while foreach return undefined....

// how to create an array...
// let arr=[1,2,3,4,5,[4,7]];
// console.log(Array.from({length:10}))
// return [undefined x 10]

// let arr=[1,2,3,4,5,[4,7]];
// console.log(Array.from({length:10}).fill(10))
// fill any array with given value .. [10 ,x 10]

// // remove elements from the start of array... and return the removed item
// let arr=[1,2,3,4,5];
// arr.shift()
// console.log(arr)

// Add elements to start of array.. return the length of array
// let arr=[1,2,3,4,5];
// console.log(arr.unshift(1,2,3,4))

// Slice
// let arr=[1,2,3,4,5]
// let x=arr.slice(1,2); [startIndex,endIndex(exlusive)]
// console.log(x,arr)
// return slice of array without modifying origional array...

//Splice
// let arr=[1,2,3,4,5]
// let x=arr.splice(3,2); [startIndex,deleteCount,...Insert Items]
// console.log(x,arr)
// return deleted items.... modify origional arrays
