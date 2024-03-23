console.log("code link functionality check");

// let animation = document.getElementById("lottie_player");
// console.log(animation);

let lottiePlayer = document.getElementById("lottie_player");
let hoverTrigger = document.getElementById("lottie_controller");

function pauser() {
  document.getElementById("lottie_player").pause();
  console.log("paused");
}

function player() {
  lottiePlayer.play();
  console.log("played");
}

animation.addEventListener("ready", () => {
  animation.pause();
});

// hoverTrigger.addEventListener("mouseover", function (event) {
//   lottiePlayer.pause();
// });

// hoverTrigger.addEventListener("mouseout", function (event) {
//   lottiePlayer.play();
// });
