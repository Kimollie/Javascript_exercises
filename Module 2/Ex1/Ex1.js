'use strict';
let numArr = [];
for (let i = 1; i<6;i++) {
    let num = prompt("Enter number " + i + ":")
    numArr.push(num);
}
console.log(numArr.length)
function reverse(array) {
    let output = [];
    for (let i = 0; i <5; i++){
        output.push(array.pop());
    }
    return output;
}
console.log(reverse(numArr));