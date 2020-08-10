const secondHand = document.querySelector(".sec-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDegrees(fullRotation, timeVariable){
  return ((timeVariable/fullRotation)*360)+90;
}
function addRotation(hand, degrees){
  hand.style.transform = `rotate(${degrees}deg)`;
}

function setDate(){
  const now = new Date();
  
  const seconds = now.getSeconds();
  addRotation(secondHand, setDegrees(60, seconds));
  
  const mins = now.getMinutes();
  addRotation(minsHand, setDegrees(60, mins));

  const hour = now.getHours();
  addRotation(hourHand, setDegrees(12, hour));
}

setInterval(setDate,1000);