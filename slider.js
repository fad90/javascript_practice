const prev = document.querySelector (".btn-prev"),
    next = document.querySelector (".btn-next"),
    slides = document.querySelectorAll (".slide"),
    dots = document.querySelectorAll (".dot");

let index = 0;

const activeSlide = n => {
    console.log(n);
    for(slide of slides) {
       slide.classList.remove('active'); 
    }
    slides[n].classList.add('active');
};

const activeDots = n => {
    console.log(n);
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrenSlide = index => {
    activeSlide(index);
    activeDots(index);
}

const nextSlide = () => {
    if(index == slides.length-1) {
        index=0;
        prepareCurrenSlide(index);
    } else {
        index++;
        prepareCurrenSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index=slides.length-1; 
        prepareCurrenSlide(index);
    } else {
        index--;
        prepareCurrenSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
        index = indexDot;
        prepareCurrenSlide(index);
        clearInterval(interval);
    });
});

next.addEventListener ("click", nextSlide);
prev.addEventListener ("click", prevSlide);

const interval = setInterval(nextSlide, 3000);

