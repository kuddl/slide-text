const sliderContainer = document.querySelector('.slider-container');
const buttons = document.querySelectorAll('button');

let current = 0;
const sliderLength= sliderContainer.children.length || 1;
buttons.forEach((button)=>{
    button.addEventListener('click', (e) => {
        // Scroll to the second slide (index 1)
        
        const dir = e.target.dataset.slideDirection || "prev"
        if(dir === "prev") { current--}
        if(dir === "next") { current++}
console.log(dir,current)
        // wrap around
        if (current < 0) current = sliderLength-1;
        if (current >= sliderLength) current = 0;     
        
        const secondSlide = sliderContainer.children[current] ;
        secondSlide.scrollIntoView({ behavior: 'smooth' });
    });
})