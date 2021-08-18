var readlineSync =require('readline-sync');

console.log("*************How Much Do You Know Me?*************")

var goodName = readlineSync.question("What is Your Good Name? ")
console.log("Welcome " +goodName +"!, Do you know Aamir?");
console.log("Lets Start the Game!!!");
console.log("----------------------")

var score=0;

function play(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("Congratulations! Thats the right answer"); 
    score++;
  }
  else{
    console.log("Ohhh! Thats the wrong answer");
  }
  console.log("Current Score: "+score);
   console.log("----------------------")
}

var questions = [

  question1 = {
    question: "Where Do I Live? :- ",
    answer: "bhiwandi"
  },
  question2 = {
    question: "Which is my favourite car? :- ",
    answer: "Civic"
  },
  question3 = {
    question: "Who is my fav sportsperson? :- ",
    answer: "ABD"
  },
  question4 = {
    question: "Which is my favourite dish? :- ",
    answer: "Chicken Chilly"
  },
  question5 = {
    question: "From which college I am Graduated? :- ",
    answer: "AIKTC"
  },
]

for(var i=0;i<questions.length;i++){
  
  play(questions[i].question,questions[i].answer)
}

console.log("Yor Final Score Of The Quiz is "+score);
console.log("Thanks For Playing "+goodName +"!");