function setup() {
 
  const startButton = document.getElementById('start');
  startButton.addEventListener('click', startGame)



}
let counterS = 0;
let counterL=0;

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



function startGame()
{
  const timeLimit = document.getElementById("timer");
  document.addEventListener("keypress", keyBoardEvents);
  console.log(timeLimit.value);

  setTimeout(stopgame,(timeLimit.value*1000))

}

window.onload = setup;

function stopgame() {
  const player = document.getElementById('result')
  counterS > counterL
    ? (player.innerText = "Swins")
    : (player.innerText = "Lwins");

 // player.innerText = 'game stopped'
  
}