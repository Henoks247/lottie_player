console.log("code link functionality check");

let animation = document.getElementById("exploding-bird");
console.log(animation);

var lottiePlayer = document.getElementById("exploding-bird");
var hoverTrigger = document.getElementById("lottiecontroller");

lottiecontroller.addEventListener("mouseover", function (event) {
  lottiePlayer.pause();
});

lottiecontroller.addEventListener("mouseout", function (event) {
  lottiePlayer.play();
});
