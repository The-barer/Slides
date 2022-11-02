const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount-1)*100}vh`

window.addEventListener('keydown', (event) => {
    event.key === 'ArrowUp' && moveSlide('up');
    event.key === 'ArrowDown' && moveSlide('down');
})
upBtn.addEventListener('click', () => {
    moveSlide('up')
})

downBtn.addEventListener('click', () => {
    moveSlide('down')
})

function moveSlide(direction) {
    if(direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesCount-1) {
            activeSlideIndex = 0
        }
    }
    else if(direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount-1
        }
    }
    const slideHeight = container.clientHeight
    mainSlide.style.transform = `translateY(-${slideHeight*activeSlideIndex}px)`
    sidebar.style.transform = `translateY(${slideHeight*activeSlideIndex}px)`
}