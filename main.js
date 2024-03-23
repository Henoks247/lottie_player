console.log("code link functionality check");
console.log("code link functionality check 2");
let animation = document.getElementById("exploding-bird");
console.log(animation);

getElementById("lottiecontroller").addEventListener("mouseover", trialfunction);

function trialfunction() {
  document.getElementById("lottiecontroller").style.backgroundColor = "red";
}

var lottiePlayer = document.getElementsByTagName("lottie-player");
var hoverTrigger = document.getElementById("lottiecontroller");

lottiecontroller.addEventListener("mouseover", function (event) {
  lottiePlayer[0].pause();
});

lottiecontroller.addEventListener("mouseout", function (event) {
  lottiePlayer[0].play();
});
