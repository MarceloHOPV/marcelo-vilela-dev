
const phrases = [
    "I'm a Software Developer",
    "I'm a QA Engineer",
    "I'm a Game Developer",
    "I'm an AI Enthusiast",
    "I'm a Unity C# Developer",
    "I'm a Python API Creator",
    "I'm a Computer Engineering Student",
    "I'm a Programming Instructor",
    "I'm a Firmware Explorer",
    "I'm a Hackathon Winner"
];

const element = document.getElementById("typewriter");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 80;
const pauseBetween = 1500;

function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        element.textContent = currentPhrase.substring(0, charIndex--);
    } else {
        element.textContent = currentPhrase.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, pauseBetween);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
}

type();