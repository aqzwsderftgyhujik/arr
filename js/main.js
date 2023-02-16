'use strict';

let arr = [];

for(let i = -49; i < 50; i++) {
    arr.push(i);
}

console.log(arr.length)
console.log(arr)

arr.sort(  ( a, b ) => b - a  );

console.log(arr)

let arr10 = arr.filter( el => el % 10 === 0 );

console.log(arr10)
