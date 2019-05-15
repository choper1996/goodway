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
        prevArrow: '<div class="about-slider__prev"><div>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
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

    let changeDaysRange = function () {
        hoursValue.innerText = +hoursRange.value;
        result.innerText = `${(+daysRange.value * +hoursRange.value) * 1150} Р`;
        hoursRange.style.background = `-webkit-linear-gradient(left ,#b1041f 0%,#b1041f ${((hoursRange.value - 1) / hoursPercent).toFixed()}%,#383838 ${((hoursRange.value - 1) / hoursPercent).toFixed()}%, #383838 100%)`;
    };

    let changeHoursValue = function () {
        daysValue.innerText = +daysRange.value;
        result.innerText = `${(+daysRange.value * +hoursRange.value) * 1150} Р`;
        daysRange.style.background = `-webkit-linear-gradient(left ,#b1041f 0%,#b1041f ${((daysRange.value - 15) / daysPercent).toFixed()}%,#383838 ${((daysRange.value - 15) / daysPercent).toFixed()}%, #383838 100%)`;
    };

    hoursRange.addEventListener('mousemove', ()=> {
        changeDaysRange();
    });

    hoursRange.addEventListener('change', ()=> {
        changeDaysRange();
    });

    daysRange.addEventListener('mousemove', ()=> {
        changeHoursValue();
    });

    daysRange.addEventListener('change', ()=> {
        changeHoursValue();
    });

    // STICK NAVIGATION AND HOVER LINKS
    let header = document.querySelector('.header'),
        navLinks = document.querySelectorAll('.nav-list__items');

    window.addEventListener('scroll', ()=> {

        let mainY       = document.querySelector('.main').getBoundingClientRect().bottom,
            beDriverY   = document.querySelector('.be-driver').getBoundingClientRect().top,
            workWithUsY = document.querySelector('.work-with-us').getBoundingClientRect().top,
            advantagesY = document.querySelector('.advantages').getBoundingClientRect().top,
            contactsY   = document.querySelector('.contacts').getBoundingClientRect().top;

        if (mainY < 10) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.backgroundColor = '#fff';
        }

        if (mainY > 10 && mainY < 100) {
            header.style.top = '-150px';
        }

        if (mainY > 110) {
            header.style.top = '0';
            header.style.position = 'absolute';
            header.style.backgroundColor = 'transparent';
        }

        if (mainY > 0) {
            navLinks.forEach((item)=>{
                item.classList.remove('active');
            });

            navLinks[0].classList.add('active');
        }

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

    // ANCHOR LINKS
    let footerNavLinks = document.querySelectorAll('.footer-nav-list__items');

    footerNavLinks.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();

            let selectedLink = e.target,
                href = selectedLink.getAttribute('href'),
                el   = document.querySelector(`${href}`);

            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    });

    let anchorToMain = document.querySelector('.header__anchor-to-main'),
        main         = document.querySelector('.main');


    anchorToMain.addEventListener('click', (e)=>{
        e.preventDefault();

        main.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });



    navLinks.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();

            let selectedLink = e.target,
                href = selectedLink.getAttribute('href'),
                el   = document.querySelector(`${href}`);

            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    });

    // MODAL
    let modal            = document.querySelector('.modal'),
        checkbox         = document.querySelector('.checkbox'),
        closeModalButton = document.querySelector('.modal__close-button');

    let  closeModal = function() {
        modal.style.opacity = '0';
        setTimeout(()=> {
            modal.style.display = 'none'
        },200)
    };

    checkbox.addEventListener('click', ()=> {
        checkbox.classList.toggle('active');
    });

    closeModalButton.addEventListener('click', ()=> {
        closeModal();
    });

    // CALL MODAL
    let callFormElements = document.querySelectorAll('.call-form');

    let callModal = function () {
        modal.style.display = 'block';
        setTimeout(()=> {
            modal.style.opacity = '1'
        },1)
    };

    callFormElements.forEach((item)=>{
        item.addEventListener('click', ()=>{
            callModal();
        });
    });

    // SUBMIT FORM
    let submitButton   = document.querySelector('.modal__button'),
        backButton     = document.querySelector('.modal-error__back-button'),
        successButton  = document.querySelector('.modal-success__button'),
        errorWindow    = document.querySelector('.modal__error-window'),
        successWindow  = document.querySelector('.modal__success-window'),
        errorMessage   = document.querySelector('.modal-error__paragraph'),
        nameInput      = document.querySelector('.name-input'),
        phoneInput     = document.querySelector('.phone-input');

    backButton.addEventListener('click', (e)=> {
        e.preventDefault();

        errorWindow.style.left = '-100%';
    });

    submitButton.addEventListener('click', (e)=> {
        e.preventDefault();

        let required = false,
            checked  = false;

        if (!(nameInput.value === '' || phoneInput.value === '')) {
            required = true;
        }

        if (checkbox.classList.contains('active')) {
            checked = true;
        }

        if (required === false) {
            errorWindow.style.left = '0';
            errorMessage.innerHTML = 'Поля, которые обязательно нужно заполнить - пустые. Проверьте свои данные и попробуйте еще раз.';
            return false;
        } else if (checked === false) {
            errorWindow.style.left = '0';
            errorMessage.innerHTML = 'Перед отправкой данных вы должны согласиться на обработку персональных данных.';
            return false;
        } else {
            successWindow.style.left = '0'
        }

    });

    successButton.addEventListener('click', (e)=> {
        e.preventDefault();
        closeModal();
    });

    // FOOTER FORM
    let footerButton     = document.querySelector('.footer__call-form-button'),
        footerNameInput  = document.querySelector('.footer__name-input'),
        footerPhoneInput = document.querySelector('.footer__phone-input');

    footerButton.addEventListener('click', (e)=> {
        e.preventDefault();

        nameInput.value = footerNameInput.value;
        phoneInput.value = footerPhoneInput.value;

        callModal();
    });

    // TOGGLE MENU
    let burger = document.querySelector('.header__burger'),
        nav    = document.querySelector('.nav');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('active');
    });




});

