/*
  OBJECTIVE 1: When mouse button is clicked on any drum button, the corresponding drum sound should play.
  OBJECTIVE 2: When a keyboard key is pressed, the corresponding drum sound should play.
  OBJECTIVE 3: When either mouse button is clicked or keyboard key is pressed, the corresponding drum button should
              change appearance for some time and revert back to its original appearance.
*/

// ---------------------------------------------- OBJECTIVE 1 & 2 ---------------------------------------------------

var drumButtons = document.querySelectorAll(".drum");

for (var i = 0 ; i < drumButtons.length ; i++) {
  drumButtons[i].addEventListener("click", playSound);
  document.addEventListener("keydown", playSound);
}

function playSound() {
  var currentKey = event.key;
  var currentButton = this.textContent;
  var audio;

  switch (currentButton || currentKey) {

    case "w":
      audio = new Audio ("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      audio = new Audio ("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      audio = new Audio ("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      audio = new Audio ("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      audio = new Audio ("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      audio = new Audio ("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      audio = new Audio ("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(currentButton);
      console.log(currentKey);

  }

  // ---------------------------------------------- OBJECTIVE 3 ---------------------------------------------------

  animate(currentButton, currentKey);

}

function animate(currentButton, currentKey) {
  switch (currentButton || currentKey) {

    case currentButton:
      document.querySelector("." + currentButton).classList.add("pressed");
      setTimeout(function () { document.querySelector("." + currentButton).classList.remove("pressed");}, 100);
      break;

    case currentKey:
      document.querySelector("." + currentKey).classList.add("pressed");
      setTimeout(function () { document.querySelector("." + currentKey).classList.remove("pressed");}, 100);
      break;

    default:
      console.log(currentButton);
      console.log(currentKey);
  }
}
