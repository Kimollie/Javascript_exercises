function calculateProbability() {
  const numDice = parseInt(document.getElementById('numDice').value);
  const sumOfEyes = parseInt(document.getElementById('sumOfEyes').value);
  let repeat = 0;
  const loop = 10000;

  for (let i = 0; i < loop; i++) {
    let sum = 0;
    for (let j = 0; j < numDice; j++) {
      sum += Math.floor(Math.random() * 6) + 1;
    }
    if (sum === sumOfEyes) {
      repeat++;
    }
  }

  const probability = (repeat / loop) * 100;
  document.querySelector('#result').innerText = "Probability to get sum" + sumOfEyes +" with " + numDice + " dices is " + probability.toFixed(2) + "%";
}
