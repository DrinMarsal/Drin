document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
    }
});

function handleButtonClick(event) {
    const button = event.target;
    button.classList.toggle('active');
    console.log(`Button ${button.textContent} clicked`);
}

function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}
