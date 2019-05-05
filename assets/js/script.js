$( document ).ready(function() {

    // MAIN BACKGROUND SLIDER
    let mainSlider      = document.querySelector('.main-background-slider');
    let mainDotsWrapper = document.querySelector('.main-background-slider__dots-wrapper');
    let mainSliderItems = document.querySelectorAll('.main__content-wrapper');

    for (let i = 0; i < mainSliderItems.length; i++) {
        let dot = document.createElement('div');
        dot.classList.add('main-background-slider__dots');
        dot.setAttribute('id', `${i}`);
        mainDotsWrapper.appendChild(dot);
    }

    let dots = document.querySelectorAll('.main-background-slider__dots');

    dots[0].classList.add('active');


    $(dots).click(function() {
        $(mainSlider).slick('slickGoTo', +$(this).attr('id'));
    });

    $(mainSlider).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        dots.forEach((item)=> {
            item.classList.remove('active')
        });

        dots[nextSlide].classList.add('active');
    });


    $(mainSlider).slick({
        infinite:      true,
        dots:          false,
        pauseOnHover:  false,
        draggable:     false,
        autoplaySpeed: 10000,
        speed:          1000,
        autoplay:       true,
        arrows:        false,
        slidesToShow:      1,
        slidesToScroll:    1,
        fade:           true
    });

    //ABOUT SLIDER
    let aboutSlider = document.querySelector('.about__slider');

    $(aboutSlider).slick({
        infinite:      true,
        dots:          false,
        pauseOnHover:  false,
        autoplaySpeed:  5000,
        speed:           300,
        autoplay:       true,
        arrows:         true,
        slidesToShow:      4,
        slidesToScroll:    1,
        nextArrow: '<div class="about-slider__next"><div>',
        prevArrow: '<div class="about-slider__prev"><div>'
    });

    // CALCULATOR

    let hoursRange = document.querySelector('.calculator__range-by-hours-section > input'),
        daysRange = document.querySelector('.calculator__range-by-days-section > input'),
        hoursValue = document.querySelector('.hours-value'),
        daysValue = document.querySelector('.days-value'),
        result = document.querySelector('.calculator__result-value');

    hoursValue.innerText = +hoursRange.value;
    daysValue.innerText = +daysRange.value;
    result.innerText = `${(+daysRange.value * +hoursRange.value) * 1150} Р`;

    let hoursPercent = 0.07,
        daysPercent  = 0.1;

    hoursRange.style.background = `-webkit-linear-gradient(left ,#b1041f 0%,#b1041f ${((hoursRange.value - 1) / hoursPercent).toFixed()}%,#383838 ${((hoursRange.value - 1) / hoursPercent).toFixed()}%, #383838 100%)`;
    daysRange.style.background = `-webkit-linear-gradient(left ,#b1041f 0%,#b1041f ${((daysRange.value - 15) / daysPercent).toFixed()}%,#383838 ${((daysRange.value - 15) / daysPercent).toFixed()}%, #383838 100%)`;

    hoursRange.addEventListener('mousemove', ()=> {
        hoursValue.innerText = +hoursRange.value;
        result.innerText = `${(+daysRange.value * +hoursRange.value) * 1150} Р`;
        hoursRange.style.background = `-webkit-linear-gradient(left ,#b1041f 0%,#b1041f ${((hoursRange.value - 1) / hoursPercent).toFixed()}%,#383838 ${((hoursRange.value - 1) / hoursPercent).toFixed()}%, #383838 100%)`;
    });

    daysRange.addEventListener('mousemove', ()=> {
        daysValue.innerText = +daysRange.value;
        result.innerText = `${(+daysRange.value * +hoursRange.value) * 1150} Р`;
        daysRange.style.background = `-webkit-linear-gradient(left ,#b1041f 0%,#b1041f ${((daysRange.value - 15) / daysPercent).toFixed()}%,#383838 ${((daysRange.value - 15) / daysPercent).toFixed()}%, #383838 100%)`;
    });

    // STICK NAVIGATION
    let main = document.querySelector('.main'),
        header = document.querySelector('.header');

    let navLinks = document.querySelectorAll('.nav-list__items');

    window.addEventListener('scroll', ()=> {
        let scrolled = window.pageYOffset;

        if (scrolled > main.clientHeight) {
            header.style.position = 'fixed';
            header.style.backgroundColor = '#fff';
        } else if (scrolled < main.clientHeight && scrolled > (main.clientHeight - 150)){
            header.style.top = '-150px';

            setTimeout(()=>{
                header.style.top = '0';
                header.style.position = 'absolute';
                header.style.backgroundColor = 'transparent';
            },300);

            navLinks.forEach((item)=>{
                item.classList.remove('active');
            });

            navLinks[0].classList.add('active');
        }

        let beDriverY   = document.querySelector('.be-driver').getBoundingClientRect().top,
            workWithUsY = document.querySelector('.work-with-us').getBoundingClientRect().top,
            advantagesY = document.querySelector('.advantages').getBoundingClientRect().top,
            contactsY   = document.querySelector('.contacts').getBoundingClientRect().top;

        if (beDriverY < 100 && beDriverY > -100) {
            navLinks.forEach((item)=>{
                item.classList.remove('active');
            });

            navLinks[1].classList.add('active');
        }

        if (workWithUsY < 100 && workWithUsY > -100) {
            navLinks.forEach((item)=>{
                item.classList.remove('active');
            });

            navLinks[2].classList.add('active');
        }

        if (advantagesY < 100 && advantagesY > -100) {
            navLinks.forEach((item)=>{
                item.classList.remove('active');
            });

            navLinks[3].classList.add('active');
        }

        if (contactsY < 100 && contactsY > -100) {
            navLinks.forEach((item)=>{
                item.classList.remove('active');
            });

            navLinks[4].classList.add('active');
        }
    });

    navLinks.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();

            let selectedLink = e.target;
            let href = selectedLink.getAttribute('href');
            let el   = document.querySelector(`${href}`);

            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    })
});

