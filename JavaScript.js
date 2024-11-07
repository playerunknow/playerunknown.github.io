

const fadeElements = document.querySelectorAll('.fade-in');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, options);

fadeElements.forEach(element => {
    observer.observe(element);
});



const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        themeToggle.textContent = 'Light Theme';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        themeToggle.textContent = 'Dark Theme';
    }
});


if (!body.classList.contains('dark')) {
    body.classList.add('light');
}



// Функция для закрытия меню
function closeMenu() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}