/*
 *
 * Question 1
 * Write a function that will "roll a dice". It should generate a random number between 1 and 6 and then log that to the console.
 * Call your function.
 *
 */

function rollDice(){
var roll = Math.floor(Math.random() * 6) + 1;
return roll;
}

rollDice();

/*
 *
 * Question 2
 * Write a function that will roll two dice. In addition to logging each dice's value, it should also log the sum.
 * Call your function.
 *
 */
function rollDices(rolls){
  var diceSum = 0;
  for (var i = 0; i < rolls; i++) {
    var diceRolls = rollDice();

    console.log(diceRolls);
    diceSum += diceRolls;    
}

  console.log(diceSum);
}

rollDices(6);
