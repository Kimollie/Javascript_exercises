'use strict';
let numOfCandidates = parseInt(prompt("Enter number of candidates:"));
let candidatesList = [];
for (let i = 1; i <= numOfCandidates; i++) {
    let candidate;
    candidate.setItem("name","votes");
    candidate.name = prompt("Name for candidate "+i);
    candidate.votes = 0;
    candidatesList.push(candidate);
}
console.log(candidatesList);