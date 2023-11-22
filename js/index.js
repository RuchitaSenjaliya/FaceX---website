// function toggleText() {
//   var talkText = document.getElementById("chat-msg");
//   console.log(talkText);
//   if (talkText.innerHTML === "Welcome to FaceX...") {
//     talkText.innerHTML =
//       "We create the most <br> trusted facial aesthetic <br> brands.";
//   } else {
//     talkText.innerHTML = "Welcome to FaceX...";
//   }
// }
const texts = [
  "We create the most trusted facial aesthetic brands. ",
  "Welcome to FaceX...",
];
let currentTextIndex = 0;
let isTyping = false;

function toggleText() {
  const typewriterText = document.getElementById("typewriter-text");

  if (isTyping) {
    isTyping = false;
  } else {
    typeWriter(typewriterText, texts[currentTextIndex]);
    currentTextIndex = (currentTextIndex + 1) % texts.length;
  }
}

function typeWriter(element, text) {
  isTyping = true;
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      element.innerHTML = text.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(type, 100);
    } else {
      isTyping = false;
    }
  }

  type();
}
