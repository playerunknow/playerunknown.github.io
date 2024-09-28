

const fadeElements = document.querySelectorAll('.fade-in');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Срабатывает, когда 10% элемента в зоне видимости
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Элемент появился
        } else {
            entry.target.classList.remove('visible'); // Элемент исчез
        }
    });
}, options);

fadeElements.forEach(element => {
    observer.observe(element); // Наблюдаем за каждым элементом
});



const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        themeToggle.textContent = 'Light Theme'; // Меняем текст кнопки
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        themeToggle.textContent = 'Dark Theme'; // Меняем текст кнопки
    }
});

// Установить начальную тему
if (!body.classList.contains('dark')) {
    body.classList.add('light'); // Устанавливаем светлую тему по умолчанию
}