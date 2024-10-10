// // JavaScript for Carousel
// const slide = document.querySelector('.carousel-slide');
// let counter = 0;

// setInterval(() => {
//     counter++;
//     if (counter >= slide.children.length) {
//         counter = 0;
//     }
//     slide.style.transform = `translateX(-${counter * 300}px)`;
// }, 3000);

// Carousel Logic
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
let index = 0;

nextButton.addEventListener('click', () => {
    index = (index + 1) % carousel.children.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + carousel.children.length) % carousel.children.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

