const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const dots = $$('.tab-item')
const slides = $$('.slide-users')
const prevBtn = $('.prev')
const nextBtn = $('.next')
const numberOfSilides = slides.length
var slideNumber = 0
var slideIndex = 0
var taskbar = $('.options');
const skillsSection = $('.skills-section')
const progressBars = $$('.container-skills-progress-bar')

const optionElements = $$('.option-item-icon')
const extendElements = $$('.extend')

optionElements.forEach((option, index) => {
    const extendElement = extendElements[index]
    option.onclick = function () {
        // clickTop()

        $('.option-item-icon.active').classList.remove('active')
        $('.extend.active').classList.remove('active')

        this.classList.add('active')
        extendElement.classList.add('active')
    }
})



// Skill
function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
        progressBar.style.transition = "all 0.4s linear" ;
    });
}

function hideProgress() {
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
        p.style.transition = "all 0.2s linear" ;
    });
}

window.addEventListener('scroll', () => {
    const sectionPositon = skillsSection.getBoundingClientRect().top;
    const screenPositon = window.innerHeight;

    if(sectionPositon < screenPositon){
        showProgress();
    } else {
        hideProgress();
    }
})


//Ấn vào nút để thay đổi đối tượng slide
dots.forEach((dot, index) => {
    const slide = slides[index]

    dot.onclick = function () {
        $('.tab-item.active').classList.remove('active')
        $('.slide-users.active').classList.remove('active')

        this.classList.add('active')
        slide.classList.add('active')
    }
});
//Next slide
nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    slideNumber++;

    if(slideNumber > (numberOfSilides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
    dots[slideNumber].classList.add('active');
});
//Lùi slide
prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSilides - 1;
    }

    slides[slideNumber].classList.add('active');
    dots[slideNumber].classList.add('active');
});

//Slide autoplay
var playSlide;

var repeater = () => {
    playSlide = setInterval(() => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
    
        slideNumber++;
    
        if(slideNumber > (numberOfSilides - 1)){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add('active');
        dots[slideNumber].classList.add('active');
    }, 5000);
}

repeater();



