'use strict';
let numArr = [];
let num;
while (true) {
    num = parseInt(prompt("Enter number: "));
    if (numArr.includes(num)) {
        alert("Number has been entered!!");
        break;
    } else {
        numArr.push(num);
    }
}
console.log(numArr.sort());