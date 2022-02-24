// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️
//

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *  Counter1 code uses a closure and keeps its variables in a local scope
 *  Counter2 does not use a closure, and therefore its variables are in global scope
 *  Both codes increment the counter
 *
 * 2. Which of the two uses a closure? How can you tell?
 *  Counter1 uses a closure, by setting a function within a function
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *  Counter1 would be preferable if you wanted to keep your variables inside the function and only be able
 *  to call them within the function counterMaker only.
 *
 * Counter2 would be preferable if you wanted to be able to reuse the count variable within the rest of the code.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

// function inning(scores){
//   return function score(){[Math.floor(Math.random()*scores.length)];
//     /*Code Here*/

// }}
// const scores = [0, 1, 2];
// console.log(inning(scores));

// function inning(scores){
//   return scores[Math.floor(Math.random()*scores.length)];
// }
// const scores = [0, 1, 2];
// console.log(inning(scores));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 



finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/
// function finalScore(inning, 8) {
//   function inning (scores){
//     return scores[Math.floor(Math.random()*scores.length)];
// }
// const scores = [0, 1, 2];
//   }


// function finalScore(inning, numberOfInnings) {

//   function inning(){
//     return scoreList[9]
//   }
  

  
// }
// console.log (finalScore(s))
function getScore(whatever){
  return scoreList[whatever];
}

let scoreList = [
  {"Home":0, "Away": 2512},
  {"Home":0, "Away": 2},
  {"Home":1, "Away": 3},
  {"Home":3, "Away": 6},
  {"Home":4, "Away": 6},
  {"Home":7, "Away": 7},
  {"Home":7, "Away": 7},
  {"Home":8, "Away": 9},
  {"Home":11, "Away": 10},
];

// console.log(inning(2));
console.log (getScore(0));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings


function that makes a scoreboard like below.
activate 'function scoreboard()' by passing number of innings (9) and function 'inning' to generate scores, creating list below.
function calling 'inning' will generate random scores from task above.
'a number of innings' will take my input (9) and create 9 innings worth of scores?
activate this function

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

// function scoreboard(getInningScore, inning, numberOfInnings) {
//   function getInningScore() {
//     return getInningScore(scoreList[chosenInning]);
//   }
//   function inning(){
//     return 
//   }

//   let numberOfInnings = scoreList;
//   /* CODE HERE */
// }

// function writeStuff(){
//   function scores(score){
//     return scores[Math.floor(Math.random()*scores.length)];
//   }
//   return console.log(`1st inning: ${scores} - ${inning(scores)}`)
// }


// function inning(scores){
//   return scores[Math.floor(Math.random()*scores.length)];
// }
// const scores = [0, 1, 2];
// // console.log(inning(scores));


// writeStuff()
//