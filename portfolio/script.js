const typewriterText = document.getElementById('typewriter-text');
const textToType = 'Welcome to my Portfolio!';
let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    typewriterText.textContent += textToType[charIndex];
    charIndex++;
    setTimeout(typeText, 100); 
  } else {
    setTimeout(function() {
      charIndex = 0;
      typewriterText.textContent = '';
      typeText();
    }, 2000); 
  }
}

typeText();