console.log("code link functionality check");

// let animation = document.getElementById("lottie_player");
// console.log(animation);

var lottiePlayer = document.getElementById("lottie_player");
var hoverTrigger = document.getElementById("lottie_controller");

function pauser() {
  lottiePlayer.pause();
  console.log("paused");
}

function player() {
  lottiePlayer.play();
  console.log("played");
}
console.log("functions defined");

pauser();

// hoverTrigger.addEventListener("mouseover", function (event) {
//   lottiePlayer.pause();
// });

// hoverTrigger.addEventListener("mouseout", function (event) {
//   lottiePlayer.play();
// });
