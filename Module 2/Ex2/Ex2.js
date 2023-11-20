'use strict';
const numOfParticipants = parseInt(prompt("Enter number of participant"));
let participants = []
for (let i = 1; i <= numOfParticipants; i++) {
    let people = prompt("Enter name of participant number " + i);
    participants.push(people);
}
let sortedName = participants.sort();

for ( const name of sortedName){
    document.querySelector("#target").innerHTML += `<li>${name}</li>`;
}
