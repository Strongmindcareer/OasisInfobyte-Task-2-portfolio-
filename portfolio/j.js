// Theme Toggle Script
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
const currentTheme = document.documentElement.getAttribute('data-theme');
const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
document.documentElement.setAttribute('data-theme', newTheme);

themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Typewriter Effect
const typewriterText = document.querySelector('.typewriter-text');
const text = "I build efficient, scalable web applications!";
let index = 0;

function typeWriter() {
if (index < text.length) {
typewriterText.innerHTML += text.charAt(index);
index++;
setTimeout(typeWriter, 100);
}
}

typeWriter();
