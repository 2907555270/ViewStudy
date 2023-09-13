let currentSlide = 0; // 当前轮播项的索引
const slides = document.querySelectorAll('.slider-item'); // 选择所有轮播项
const totalSlides = slides.length;
console.log(totalSlides)

function showSlide(n) {
    // 隐藏所有轮播项
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
    }

    // 显示指定索引的轮播项
    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// 设置定时器，自动切换轮播项
const slideInterval = setInterval(nextSlide, 3000); // 3秒切换一次

// 初始显示第一个轮播项
showSlide(currentSlide);