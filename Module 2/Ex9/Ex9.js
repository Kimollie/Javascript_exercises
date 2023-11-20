'use strict';
function even(array) {
    let newArray = [];
    for (const number of array) {
        if ((number%2) === 0) {
            newArray.push(number)
        }
    }
    return newArray
}

const array = [2,4,3,8,7,9,5];
const newArray = even(array);
console.log(array);
console.log(newArray);