console.log("code link functionality check");
console.log("code link functionality check 2");
let animation = document.getElementById("exploding-bird");
console.log(animation);

var lottiePlayer = document.getElementsByTagName("lottie-player");
var hoverTrigger = document.getElementById("lottiecontroller");

lottiecontroller.addEventListener("mouseover", function (event) {
  lottiePlayer.pause();
});

lottiecontroller.addEventListener("mouseout", function (event) {
  lottiePlayer.play();
});
