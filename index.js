
//code to add event listener on click of the mouse
for(var i = 0;i<7;i++){
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    //all things that you want to do if that button is clicked
    //calling of makesound function
    makeSound(this.innerHTML);

    //function to add animation
    addAnimation(this.innerHTML);
  });
}

//code to add event listener to the whole document to check for any key pressed on the keyboard
document.addEventListener("keydown",function(event){

  //calling of makesound function
  makeSound(event.key);

  //adding animation
  addAnimation(event.key);
});

//makesound function to make sounds using switch case
function makeSound(key){

  //switch case based on the key pressed or clicked on the screen
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(this.innerHTML);

  }
}

//fuction to add animation
function addAnimation(keypressed) {

  //selecting the key pressed
  var activeButton = document.querySelector("." + keypressed);

  //adding class to its classlist
  activeButton.classList.add("pressed");

  //removing that class after a time delay
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
