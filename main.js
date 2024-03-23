console.log("code link functionality check");

// let animation = document.getElementById("lottie_player");
// console.log(animation);

let lottiePlayer = document.getElementById("lottie_player");
let hoverTrigger = document.getElementById("lottie_controller");

hoverTrigger.addEventListener("mouseover", () => {
  lottiePlayer.pause();
});

hoverTrigger.addEventListener("mouseout", () => {
  lottiePlayer.play();
});
// hoverTrigger.addEventListener("mouseover", function (event) {
//   lottiePlayer.pause();
// });

// hoverTrigger.addEventListener("mouseout", function (event) {
//   lottiePlayer.play();
// });
