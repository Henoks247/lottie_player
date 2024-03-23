console.log("code link functionality check");
console.log("code link functionality check 2");
let animation = document.getElementById("exploding-bird");
console.log(animation);

var lottiePlayer = document.getElementsByTagName("lottie-player");
console.log(2);
var hoverTrigger = document.getElementById("lottiecontroller");
console.log(3);
lottiecontroller.addEventListener("mouseover", function (event) {
  lottiePlayer.pause();
  console.log(4);
});

lottiecontroller.addEventListener("mouseout", function (event) {
  lottiePlayer.play();
  console.log(5);
});
