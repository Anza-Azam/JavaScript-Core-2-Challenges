let counterS;
let counterL;
function setup() {
  
  const startButton = document.getElementById('start');
  startButton.addEventListener('click', startGame)



}


function keyBoardEvents(e) {
  if (e.keyCode === 83) {
    // On 'S' Pressed
    counterS += 1;
    const players = document.getElementById("s");
    console.log(counterS)
     players.innerText = counterS;

  } else if (e.keyCode === 76) {
    // On 'L' Pressed
    counterL += 1;
     const playerL = document.getElementById("l");
    playerL.innerText = counterL;
    console.log(counterL)
  }
}

  let interval

function startGame()
{
counterS = 0;
counterL = 0;
  const timeLimit = document.getElementById("timer");
  document.addEventListener("keypress", keyBoardEvents);
  console.log(timeLimit.value);
  const player = document.getElementById('result')
  player.innerText = timeLimit.value;
  interval = setInterval(checkTime, 1000);


}

function checkTime() {
    const player = document.getElementById('result')
  const timeLimit = document.getElementById("timer");
  if (timeLimit.value <= 0) {
    clearInterval(interval)
    stopgame();
  }
  else {
    (timeLimit.value -= 1000);
    player.innerText = timeLimit.value - 1000;
  
  }
}
window.onload = setup;

function stopgame() {
  
  const player = document.getElementById('result')
  if (counterS === counterL) {
    player.innerText = "game tied, new game starts in 2 seconds"
//     var confettiSettings = { target: 'my-canvas' };
// var confetti = new ConfettiGenerator(confettiSettings);
// confetti.render();
  }
  else if (counterS > counterL)
    (player.innerText = "Player S wins the game"+ " new game starts in 2 seconds")
  
  else (player.innerText = "Player L wins the game"+" new game starts in 2 seconds");

  setTimeout(() => {
    const timeLimit = document.getElementById("timer");
    const players = document.getElementById("s");
     const playerL= document.getElementById("l");
    // const timeLimit = document.getElementById("timer");
    player.innerText = ''
    players.innerText = 'Press "S"'
    playerL.innerText = 'Press "L"'
    
    timeLimit.value=''
  },2000);
 // player.innerText = 'game stopped'
  
}