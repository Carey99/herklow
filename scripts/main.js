const words = ["Artistic", "Cinematic", "Professional"];
let currentWordIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;

const dynamicTextElement = document.getElementById("dynamic-text");

function type() {
    const currentWord = words[currentWordIndex];
    let displayText = currentWord.substring(0, currentLetterIndex + 1);

    dynamicTextElement.textContent = displayText;

    if (!isDeleting) {
        if (currentLetterIndex < currentWord.length) {
            currentLetterIndex++;
            setTimeout(type, 100);
        } else {
            isDeleting = true;
            setTimeout(type, 2000);
        }
    } else {
        if (currentLetterIndex > 0) {
            currentLetterIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
    }
}
type();

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
    });
});