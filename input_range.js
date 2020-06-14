let slider = document.querySelector(".slider");

slider.addEventListener("mousemove", function(){
    let x = slider.value;
    let color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
    slider.style.background = color;
})
