var summerScore = 0;
var winterScore = 0;
var qAnswered = 0;
var result = document.getElementById("result");

function getResult() {
  if (summerScore > winterScore) {
    result.innerHTML = "You are a summer person!";
    console.log("You are a summer person!");
  }
  else if (winterScore > summerScore) {
    result.innerHTML = "You are a winter person!";
    console.log("You are a winter person!");
  }
}

function summer() {
  summerScore += 1;
  qAnswered += 1;
  console.log("Summer score = " + summerScore + " and questions answered = " + qAnswered);
  if (qAnswered == 3) {
    console.log("The quiz is done!");
    getResult();
  }
}

function winter() {
  winterScore += 1;
  qAnswered += 1;
  console.log("Winter score = " + winterScore + " and questions answered = " + qAnswered);
  if (qAnswered == 3) {
    console.log("The quiz is done!");
    getResult();
  }
}

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", summer);
q1a2.addEventListener("click", winter);

q2a1.addEventListener("click", summer);
q2a2.addEventListener("click", winter);

q3a1.addEventListener("click", summer);
q3a2.addEventListener("click", winter);