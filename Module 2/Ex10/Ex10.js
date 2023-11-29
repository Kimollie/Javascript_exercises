// Function to get input from user
function getInput(promptMessage) {
  return prompt(promptMessage);
}

// Function to initialize candidates with zero votes
function initializeCandidates(numCandidates) {
  const candidates = [];
  for (let i = 0; i < numCandidates; i++) {
    const candidateName = getInput(`Name for candidate ${i + 1}`);
    candidates.push({ name: candidateName, votes: 0 });
  }
  return candidates;
}

// Function to conduct voting
function conductVoting(candidates, numVoters) {
  for (let i = 0; i < numVoters; i++) {
    const vote = getInput(`Voter ${i + 1}, enter candidate name (or leave empty for an empty vote)`);
    const candidate = candidates.find((c) => c.name === vote);
    if (candidate) {
      candidate.votes++;
    } else if (vote === '') {
      // Handling empty votes
      console.log(`Voter ${i + 1} cast an empty vote.`);
    } else {
      console.log(`Invalid vote by Voter ${i + 1}.`);
    }
  }
}

// Function to announce winner and display results
function announceResults(candidates) {
  candidates.sort((a, b) => b.votes - a.votes); // Sort candidates based on votes

  console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
  console.log('Results:');
  candidates.forEach((candidate) => {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
  });
}

// Main function to run the voting program
function runVoting() {
  const numCandidates = parseInt(getInput('Enter the number of candidates'), 10);
  const candidates = initializeCandidates(numCandidates);

  const numVoters = parseInt(getInput('Enter the number of voters'), 10);
  conductVoting(candidates, numVoters);

  announceResults(candidates);
}

// Run the program
runVoting();
