/**
 * Question 1
 * Create a program that will grade a random test score between 0 and 100.
 *
 * Grading scale:
 * - An "A" is between [90 and 100]
 * - A "B" is between [80 and 90)
 * - A "C" is between [70 and 79)
 * - A "D" is between [60 and 69)
 * - An "F" is between [0 and 60)
 *
 * Log both the random number grade and its corresponding letter grade to the console.
 */

 var testScore  = Math.round(Math.random() * 100);

 if (testScore >= 90) {
   console.log("you scored a " + testScore + ". You got an A!");
 } else if (testScore >= 80){
   console.log("you scored a " + testScore + ". You got an B!");
 } else if (testScore >= 70){
   console.log("you scored a " + testScore + ". You got an C!");
} else if (testScore >= 60){
  console.log("you scored a " + testScore + ". You got an D!");
} else {
    console.log("Ew. you scored a " + testScore + ". You got an F!");
}
/**
 * Question 2
 * Create a second random test score between 0 and 100. Calculate the average of the two test scores.
 * If the average is a "B" or better, log to the console "Well done!" else log "Better luck next time".
 *
 */

var secondTestScore = Math.random() * 100;

var average = Math.round(testScore + secondTestScore / 2);

// Use a ternary to assign the message.
var message = (average > 80) ? console.log("Score: " + average + ". Well Done!") : console.log("Score: " + average + ". Better luck next time");
