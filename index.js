var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

var highScore = [
  {
    Name: "Mudra",
    Score: 4
  }];


var question = "Whats Your name? "

var userName = readlineSync.question(chalk.bgRedBright.red(question));

console.log(chalk.blue("Welcome ") + chalk.cyanBright
  (userName) + "\n" + chalk.yellowBright("Lets start a Quiz Game on Our one and only Indian Cricket Captain cool?"))


function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  //processing
  if (userAnswer === answer) {
    console.log(chalk.green("You are right"))
    score = score + 1;

  }
  else {
    console.log(chalk.red("You are wrong"))
    score = score - 1;
  }
}


const questions = [{ question: "Who is Known as Captain Cool in Cricket? ", options: ["a-Virat Kohli", "b-M S Dhoni", "c-Rohit Sharma", "d-None of these"], answer: "b" }, {
  question: "When was Mahendra Singh Dhoni born?", options: ["a-7 July", "b-12 May", "c-8 August", "d-22 April"], answer: "a"
}, {
  question: "When did MS Dhoni play his first ODI?", options: ["a-2007", "b-2003", "c-2004", "d-2005"], answer: "c"
}, {
  question: "In the Indian Premier League, MS Dhoni captained which team?", options: ["a-Rajasthan Royals", "b-Delhi Daredevils", "c-Deccan Chargers", "d-Chennai Super Kings"], answer: "d"
}]

for (var i = 0; i < questions.length; i++) {

  var currentQuestion = questions[i];
  var options = currentQuestion.options;

  play(chalk.underline.bgBlue(currentQuestion.question) + "\n" + chalk.bgMagentaBright(currentQuestion.options) + "\n", currentQuestion.answer)

}

console.log(score, "Your Score is")
console.table("Current Highscore is " + highScore[0].Score);

console.log(chalk.red("\nIf you beat the high score please send the screenshot of your score\n"));