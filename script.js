const message = document.querySelector(".message"),
  gameArea = document.querySelector(".gameArea"),
  button = document.querySelector("button");
var gamePlay = false,
  score = 0;
  
button.addEventListener("click", function () {
  if (!gamePlay) {
    startGame();
  } else {
    check();
  }
});

function startGame() {
  gamePlay=true;
  button.innerHTML = "Check Combo";
  score = 0;
  message.innerHTML = "Your Gusses : " + score;
  gameArea.innerHTML="";
  maker();
}
function check() {
  let winCondition = 0;
  const numbers = document.querySelectorAll(".numb");
  score++;
  message.innerHTML = "Your Gusses : " + score;
  for(let i = 0 ; i < numbers.length ; i++){
    if (numbers[i].correct == numbers[i].value) {
      numbers[i].style.backgroundColor="green";
      numbers[i].style.color="white";
      winCondition++;
    }else{
        let color = numbers[i].value < numbers[i].correct ? "blue" : "red";
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "white";
    }
    if(winCondition==7){
        message.innerHTML="You Win with "+score+" Gusses. Start Again!";
        button.innerHTML="Start";
        gamePlay=false;
    }
  }
  
}

function maker() {
  for (let i = 0; i <= 6; i++) {
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.style.fontSize = "1.8em";
    el.style.width = "50px";
    el.classList.add("numb");
    el.correct = Math.floor(Math.random() * 10);
    el.value = 0;
    el.order = i;
    gameArea.appendChild(el);
  }
}
