const defaultImages = [{src: 'img/1.jpg', alt: 'cat'},
    {src: 'img/2.jpg', alt: 'village road'},
    {src: 'img/3.jpg', alt: 'forest'},
    ];

function generateSliderLayout(){
    return ` <div class="slider">
        <div class="slides"></div>
    <div class="controls">
        <button type="button" class="prev-btn" data-action="prev">Prev</button>
        <div class="indicators">
        </div>
        <button type="button" class="next-btn" data-action="next">Next</button>
    </div>
</div>`;
}

function initializeSlider(imagesArray = defaultImages) {

const INTERVAL = 5000;
let currentSlide = 0;
const slidesElement = document.querySelector('.slides');
const DEFAULT_ACTION = 'next';
const indicatorsElement = document.querySelector('.indicators');

const dragging = {
    startX: 0,
    endX: 0,
};

function generateSlider(){
    imagesArray.forEach((image, index) => {
       
        genegateSlide(image, index, slidesElement);
        generateIndicator(image, index, indicatorsElement);
})
}

function genegateSlide(image, index, parent){
    const slide = document.createElement('div');
    slide.classList.add('slide');

    if(index === 0){
        slide.classList.add('active');
    }
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    slide.appendChild(img);
    parent.appendChild(slide);
}

function generateIndicator(image, index, parent){

    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === 0){
        indicator.classList.add('active');
    }
    const img = document.createElement('img');
    img.src = image.src;
    img.setAttribute('data-id', index);
    indicator.appendChild(img);
    parent.appendChild(indicator);
}

generateSlider();

function changeSlide(action = DEFAULT_ACTION, slideNumber = null){

    slidesElement.children[currentSlide].classList.remove('active');

    indicatorsElement.children[currentSlide].classList.remove('active');

    if(action || slideNumber !== null){
        clearInterval(timer);
        timer = setInterval(changeSlide, INTERVAL);
    }

    if(slideNumber !== null){
        currentSlide = slideNumber;
    } else {

    const lastElement = slidesElement.children.length - 1;
    
    if(action === 'next'){
         currentSlide = currentSlide ===  lastElement ? 0 : (currentSlide + 1);

    } else {
        currentSlide = currentSlide === 0  ? lastElement : (currentSlide - 1);
    }
}
    slidesElement.children[currentSlide].classList.add('active');
    indicatorsElement.children[currentSlide].classList.add('active');
    indicatorsElement.children[currentSlide].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
}

let timer = setInterval(changeSlide, INTERVAL);

document.querySelector('.prev-btn').addEventListener('click', () => changeSlide('prev'));

document.querySelector('.next-btn').addEventListener('click', () => changeSlide('next'));

document.querySelector('.indicators').addEventListener('click', event =>{
    if(event.target.tagName === 'IMG'){
    const indicatorId = parseInt(event.target.getAttribute('data-id'));
    changeSlide(null, indicatorId);
    }
})

slidesElement.addEventListener('touchstart', event => {
    console.log('start');
    dragging.startX = event.touches[0].clientX;
});

slidesElement.addEventListener('touchend', event => {
    console.log('end');
    dragging.endX = event.changedTouches[0].clientX;
    const lastElement = slidesElement.children.length-1;
    
    (dragging.startX < dragging.endX) ? changeSlide('prev') : changeSlide('next');
} );

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight'){
        changeSlide('next')
    } else if (event.key === 'ArrowLeft') {
        changeSlide('prev');
    }  else if (event.key === ' ') {
        if (timer) {
            clearInterval(timer);
            timer = null;  
        } else {
            timer = setInterval(changeSlide, INTERVAL);
        }
}});
}