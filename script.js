
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

window.onload = () => {
    
    setTimeout(() => {
        document.getElementById('welcome-screen').classList.add('fade-out');
        
        
        setTimeout(typeWriter, 500); 
    }, 2000);
};