function toggleText() {
  var talkText = document.getElementById("chat-msg");
  if (talkText.innerHTML === "Welcome to FaceX...") {
    talkText.innerHTML = "We create the most trusted facial aesthetic brands.";
  } else {
    talkText.innerHTML = "Welcome to FaceX...";
  }
}
