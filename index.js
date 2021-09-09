const chalk = require('chalk');
const log=console.log;

const text=chalk.hex('#3F72AF');//BLUE
const right=chalk.hex('#FF165D');//pink
const wrong=chalk.hex('#FF9A00');//yellow

var score=0;
var readline=require('readline-sync');

//array objects of highscore
var highScores=[{
  name:"Ayush",
  score:"5",
},{
  name:"Akhand",
  score:"3",
}];

//array objects
var question=[{
  question:"Who is the fastest man alive? ",
  answer:"The Flash",
},{
  question:"What is the real name of Batman in DC? ",
  answer:"Bruce Wayne",
},{
  question:"Who played the Wonder Wonder Character in Real life? ",
  answer:"Gal Gadot",
},{
  question:"Audience favourite Superman played by? ",
  answer:"Henry Cavill",
},{
  question:"Who is most loved Character in DC? ",
  answer:"Superman",
}];

//welcome
function welcome(){
var userName=readline.question("What's your name? ");
log('Welcome',right(userName),"let's see how well you know",text('DC UNIVERSE'),"?" );
log("----------------")
};

//play
function play(question,answer){
var userAnswer=readline.question(question);
    log("You entered "+text(userAnswer));
if(userAnswer.toUpperCase()===answer.toUpperCase()){
  log(right('right answer!'));
  score=score+1;
}  else{
  log(wrong('wrong answer!'))
}
  log('current score: ',right(score));
  log("----------------------");
}

//highscore
function showScores(){
  log("Checkout the highscores, if you should be there ping me and I'll update it:");
  for (var i=0;i<highScores.length;i++){
    currentHighScore=highScores[i];
    log(currentHighScore.name,":",right(currentHighScore.score));
  }
  log("");
}


function game(){
for(var i=0;i<question.length;i++){
  var currentQuestion=question[i];
  play(currentQuestion.question,currentQuestion.answer);
}
log("YAY! You SCORED: ",right(score),'\n');
};

welcome();
game();
showScores();
