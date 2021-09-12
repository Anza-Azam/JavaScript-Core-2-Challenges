let counterS;
let counterL;
function setup() { 
  
  const startButton = document.getElementById('start');
  startButton.addEventListener('click', startGame)
  document.removeEventListener("keypress", keyBoardEvents)
  const confetti = document.getElementById('my-canvas')
  confetti.style.display = 'none';
  const confetti2 = document.getElementById('my-canvas2')
  confetti2.style.display='none'
  


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
  const confetti = document.getElementById('my-canvas')
  confetti.style.display = 'none';
  const confetti2 = document.getElementById('my-canvas2')
  confetti2.style.display='none'
  const timeLimit = document.getElementById("timer");
  document.addEventListener("keypress", keyBoardEvents);
  if (timeLimit.value === '') {
    alert('please input time')
    restartButton();
  }
  console.log(timeLimit.value);
  const player = document.getElementById('result')
  player.innerText = timeLimit.value;
  interval = setInterval(checkTime, 1000);


}

function checkTime() {
    const player = document.getElementById('result')
  const timeLimit = document.getElementById("timer");
  if (timeLimit.value < 2000) {
    clearInterval(interval)
    stopgame();
  }
  else {
     player.innerText = timeLimit.value-1000;
    (timeLimit.value -= 1000);
   
  
  }
}
window.onload = setup;

function stopgame() {
  clearInterval(interval)
   
  const player = document.getElementById('result')
  if (counterS === counterL && counterS > 0 && counterL > 0) {
    player.innerText = "game tied, new game starts in 4 seconds"
       
  }
  else if (counterS > counterL)
  {
    (player.innerText = "Player S wins the game" + " new game starts in 4 seconds")
   // const winner= document.createElement('canvas')
    //winner.id='my-canvas2';
    var ele = document.getElementById('my-canvas2');
   // ele.appendChild(winner);
ele.style.display='flex'
    var confettiSettings = { target: 'my-canvas2' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }
  
  else if (counterL > counterS) {

    player.innerText = "Player L wins the game" + " new game starts in 4 seconds"
   // const winner= document.createElement('canvas')
    //winner.id='my-canvas';
    var ele = document.getElementById('my-canvas');
    //ele.appendChild(winner);
    ele.style.display = 'flex';
    var confettiSettings = { target: 'my-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }
    else { player.innerText= 'No Winners' + ' new game starts in 4 seconds' }
  

  setTimeout(() => {
    const timeLimit = document.getElementById("timer");
    const players = document.getElementById("s");
     const playerL= document.getElementById("l");
    // const timeLimit = document.getElementById("timer");
    player.innerText = ''
    players.innerText = 'Press "S"'
    playerL.innerText = 'Press "L"'
    const confetti = document.getElementById('my-canvas')
  confetti.style.display = 'none';
  const confetti2 = document.getElementById('my-canvas2')
  confetti2.style.display='none'
    timeLimit.value=''
  },4000);
 // player.innerText = 'game stopped'
  
}
 
const restart = document.getElementById('restart');
restart.addEventListener('click', restartButton)
function restartButton() {
  clearInterval(interval)
  const confetti = document.getElementById('my-canvas')
  confetti.style.display = 'none';
  const confetti2 = document.getElementById('my-canvas2')
  confetti2.style.display='none'
  const player = document.getElementById('result')
  const timeLimit = document.getElementById("timer");
  const players = document.getElementById("s");
  const playerL = document.getElementById("l");
  // const timeLimit = document.getElementById("timer");
  player.innerText = ''
  players.innerText = 'Press "S"'
  playerL.innerText = 'Press "L"'
    
  timeLimit.value = ''
}