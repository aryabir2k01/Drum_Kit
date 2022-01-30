var num = document.querySelectorAll(".drum").length;
var i = 0;

while (i < num) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  })
  i++;
}
document.addEventListener("keydown" , function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key)
{
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:
      console.log.innerHTML;
  }
}

function buttonAnimation(currentKey)
{
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
      activeButton.classList.remove("pressed");
   } , 100);
}






















// document.querySelector(".drum0").addEventListener("click" , function()
// {
//   alert("I just got clicked ");
// })
//
//
// document.querySelector(".drum1").addEventListener("click" , function()
// {
//   alert("I just got clicked ");
// })
//
// document.querySelector(".drum2").addEventListener("click" , function()
// {
//   alert("I just got clicked ");
// })
//
// document.querySelector(".drum3").addEventListener("click" , function()
// {
//   alert("I just got clicked ");
// })
//
// document.querySelector(".drum4").addEventListener("click" , function()
// {
//   alert("I just got clicked ");
// })
//
// document.querySelector(".drum5").addEventListener("click" , function()
// {
//   alert("I just got clicked ");
// })
//
// document.querySelector(".drum6").addEventListener("click" , function()
// {
//   alert("I just got clicked ");
// })
