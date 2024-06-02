document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const greenBtn = document.querySelector('.green-btn');
    const redBtn = document.querySelector('.red-btn');

    container.insertBefore(greenBtn, redBtn); // Переміщення зеленої кнопки над червоною
});
