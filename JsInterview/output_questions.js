// //Q1
// q: []+[]
// ans =''

// //Q2
// q: typeof []+[]
// ans = object  /// because typeof will read first [] and tell its type

// Bonus
// let x = [1];
// let y = x + 1;
// console.log(y);
// ans=11

// //Q4
// q: {}+{}
// ans = NAN

// //Q5
// q: typeof ({}+{})
// ans = number  /// because typeof NAN is also number in js

// //Q6
// q: []+{}
// ans = '[object Object]'

// //Q7
// q: typeof ([]+{})
// ans = string

// //Q8
// q: {}+[]
// ans = 0

// let x = { b: 1, c: 2 };
// let y = Object.keys(x);
// console.log(y.length);
// ans=2

// let x = '{ "b": 1, "c": 2 }';
// let y = JSON.parse(x);
// console.log(typeof y);
// ans= object

// let x = 0.1 + 0.2;
// let y = 0.3;
// console.log(x == y);
// ans= false  // because 01+02 will be something like 0.30000004

// let x = 1 > 2 > 3;
// console.log(x);
// ans=false // because it will be like 0 > 3 after false will be converted to 0

// let x = false;
// let y = "0";
// let z = 0;
// console.log(x == y);
// console.log(x == z);
// ans= true, true

// let x = [];
// console.log(Boolean(x));
// true

// []==true
// ans=false

// let x = {};
// console.log(Boolean(x));
// true

// {}==true
// ans=false

// let x = Infinity;
// console.log(typeof x);
// ans = number

// let x = "5";
// let y = 2;

// console.log(x + y);
// console.log(x - y);
// ans= 52 , 3 ... because in case of + number will be converted to string and in case of - str will be converted into number

// "a"-1+"4"
// ans= NAN4

// 1+2+4+"h"
// ans= 7h

// 1+2+4+"6"
// ans=76

//"30"+"30"-"30"
// ans="3000"

// 1-2-3-"6"
// ans= -10

// let x = "hello";
// let y = new String("hello");

// console.log(x == y);
// console.log(x === y);
// ans= true , false bcz second is object type

// let x = true;
// let y = false;
// let z = x + y && x * y;
// console.log(z);
// ans= 0 because it will be like  1 && 0 so second one will be returned.

// function foo(a, b) {
//     console.log(arguments[1]);
//   }
//   foo(3);
// ans=undefined

// let x = "false";
// let y = !x;

// console.log(y);
// ans - false

// var num = 8;
// var num = 10;

// console.log(num);
// ans =10 // Hoisting

// console.log(x);
// var x;
// ans = undefined // Hoisting

// let x = true + true;
// let y = x + false;
// console.log(y);
// ans= 2

// let xs=[1,2,3].map(e=>{})
// console.log(xs);
// ans= [undefined,undefined,undefined]

// How to return array from reduce function as it returns single value....
// [1,2,3].reduce((initial,value,index)=>{
//     initial.push(value);
//     return value;
// },[] // its initial value to reduce function)

// const a = { b: { c: 2 } };
// const b = { ...a };
// a.b.c = 3;
// console.log(b.b.c);
// ans=3 // 1 level deep copy will be created of a object , inner object will be still refrenced (shallow copy)

// Same here will happen

// let x = { a: 1, b:{c:3} };
// let y = Object.assign({}, x);
// y.b.c=4;

// then how to create deep copy ??? use structuredClone() or json.stringify then json.parse

// let x = [1, 2, 3];
// let [, , y] = x;
// console.log(y);
// ans=3;

// let arr = [1, 2, 3];
// arr[10] = 4;
// console.log(arr.length);
// ans=11

// let x = 10;
// let y = 20;
// console.log("total = " + x + y);
// ans= total = 1020

// let x = 5;
// let y = 6;
// x += x > y ? x : y;
// console.log(x);
// ans=11

// let a = [1, 2, 3];
// a.push(a[2]++);
// ans=[ 1, 2, 4, 3 ]

// how to avoid cicular reference ??? https://www.freecodecamp.org/news/circular-reference-in-javascript-explained/#:~:text=One%20major%20way%20to%20solve,properties%20that%20can%20cause%20errors.

// let x = {
//     y: "z",
//     print: ()=> {
//       return this.y === "z";
//     },
//   };
//   console.log(x.print());
// ans= false  // because arrow function dont have this so it will point to lexical env this..

// How to correct this ???

// let x = {
//     y: "z",
//     print: function() {
//       return this.y === "z";
//     },
//   };
//   console.log(x.print());

// let x = [1, 2, 3];
// let y = x.join("");
// console.log(typeof y);
// ans=string

// let margin = "10px";
// let x = parseInt(margin);
// console.log(parseInt(x));
// ans=10

// let margin = "px10";
// let x = parseInt(margin);
// console.log(parseInt(x));
// ans=NAN

// let a = 10;
// let b = (a, a + 10);
// console.log(b);
// , operator always return 2nd value

// let x = 7;
// let y = (typeof x).length;
// console.log(y);
// ans=6 because 'number'.length =6

// let x = [1, 2, 3];
// let y = x.slice();
// console.log(y, x === y);
// [1,2,3] false , as slice will create shallow copy...

// const a = [1, 2, 3];
// const b = [...a];
// b.push(4);
// console.log(a);
// [1,2,3] as ... will create shallow copy

// let x = [31, 2, 8];
// x.sort();
// console.log(x);
// [2,31,8] // by default sort will compare them as string .... so how  ? sort((a,b)=>a-b)

// let x = 018;
// let y = 015;
// console.log(x - y);
// ans=5
// leading 0 will be considered octal base value so their decimals are 18 and 13 ....

// const x = true;
// const y = 1;
// console.log(x == y, x === y);
// true , false
