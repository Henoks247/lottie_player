console.log("code link functionality check");

getElementById("lottie-controller").addEventListener(
  "mouseover",
  trialfunction
);

function trialfunction() {
  document.getElementById("lottie-controller").body.style.backgroundColor =
    "red";
}

// var lottiePlayer = document.getElementsByTagName("lottie-player");
// var hoverTrigger = document.getElementById("lottie-controller");

// lottie-controller.addEventListener('mouseover', function(event) {
//   lottiePlayer[0].pause()
// });

// lottie-controller.addEventListener('mouseout', function(event) {
//   lottiePlayer[0].play()
// });
