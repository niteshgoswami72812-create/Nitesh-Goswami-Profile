
const textToType = "Hi there 👋 I'm Nitesh Goswami !";
const typingSpeed = 100; 
let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        document.getElementById("typewriter").innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
}
window.onload = typeWriter;