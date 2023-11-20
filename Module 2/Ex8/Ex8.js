'use strict';
function concat(array) {
    let newString = "";
    for(const word of array) {
        newString += word;
    }
    return newString
}
const array = ["Johnny", "DeeDee", "Joey", "Marky"];
document.querySelector("#target").innerHTML = concat(array);