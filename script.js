// script.js

// Get references to the Yes and No buttons
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Add event listeners for button interactions
yesButton.addEventListener('mouseover', () => {
    yesButton.style.transform = 'translateY(-5px)';
});

yesButton.addEventListener('mouseout', () => {
    yesButton.style.transform = 'translateY(0)';
});

noButton.addEventListener('mouseover', () => {
    // Randomly move the No button within the viewport
    noButton.style.left = Math.random() * 80 + 'vw';
    noButton.style.top = Math.random() * 80 + 'vh';
});
