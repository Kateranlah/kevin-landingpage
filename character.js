const character = document.getElementById("character");

function greet() {
  speakAnimation();
}

function speakAnimation() {
  setTimeout(() => {
    startAnimation();
    setTimeout(() => {
      stopAnimation();
    }, 5000);
  }, 5000);
}

function startAnimation() {
  document.getElementById("character").classList.add("animate");
}

function stopAnimation() {
  document.getElementById("character").classList.remove("animate");
}
