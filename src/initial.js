/** GLOBALS
 * objects: window
 * functions: setInterval
 */

/**
 * make header DOM elements (the navigation bar)
 */
const loadHeader = function() {
        let container = document.querySelector('div#container');

        // make header elements
        let header = document.createElement('header');
        let navBar = document.createElement('nav');
        let ul = document.createElement('ul');
        
        let home = document.createElement('li');
        home.textContent = "Home";
        home.setAttribute('id', 'home');
        home.setAttribute('tabindex', '1');

        let aboutUs = document.createElement('li');
        aboutUs.textContent = "About Us";
        aboutUs.setAttribute('id', 'about-us');
        aboutUs.setAttribute('tabindex', '2');

        let orderOnline = document.createElement('li');
        let link = document.createElement('a');
        link.textContent = "Order Online";
        link.setAttribute('id', 'order-online');
        link.setAttribute('tabindex', '3');
        link.setAttribute('href', 'https://qmenu.us/#/captain-k-s-seafood');
        orderOnline.appendChild(link);

        let contactUs = document.createElement('li');
        contactUs.textContent = "Contact Us";
        contactUs.setAttribute('id', 'contact-us');
        contactUs.setAttribute('tabindex', '4');

        // append elements
        ul.append(home, aboutUs, orderOnline, contactUs);
        navBar.appendChild(ul);
        header.appendChild(navBar);
        container.prepend(header);
}

/**
 * load the DOM elements for the slideshow
 * @param {object} container - DOM element that contains the slideshow images
 * @param {*} imgs - images in the slideshow
 */
const loadSlideshowDOM = function (container, imgs) {
    // make navigation arrows
    let leftArrow = document.createElement('a');
    leftArrow.textContent = '❮';
    leftArrow.classList.add('left-arrow');
    let rightArrow = document.createElement('a');
    rightArrow.textContent = '❯';
    rightArrow.classList.add('right-arrow');

    //make navigation dots
    let dotsContainer = document.createElement('div');
    dotsContainer.setAttribute('id', 'dots');
    for(let i=0; i<imgs.length; i++) {
        let img = document.createElement('div');
        img.classList.add('slideshow-image');
        img.style.cssText = `background-image: url(${imgs[i]})`;

        let dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.append(dot);
        container.append(img);
    }
    container.append(leftArrow, rightArrow, dotsContainer);
}

/**
 * logic for creating dynamic 'slideshow' background of home page
 */
const slideshow = ((slideIndex, intervalTime) => {

    // slideshow timer
    const Timer = (fn, t) => {
        let timerObj = null;

        const stop = function() {
            if (timerObj) {
                clearInterval(timerObj);
                timerObj = null;
            }
        }

        // start timer using current settings (if it's not already running)
        const start = function() {
            if (!timerObj) {
                stop();
            }
            timerObj = setInterval(fn, t);
        }

        // start with new or original interval, stop current interval
        const reset = (newT = t) => {
            t = newT;
            stop();
            start();
        }

        return { stop, start, reset };
    };

    // change slide by n amount and reset timer
    const nextSlide = (n) => {  
        displaySlide(slideIndex += n);
    }  
    
    // show slide n
    const currentSlide = (n) => {
        displaySlide(slideIndex = n);
    }

    // function to control which slide is presented
    const displaySlide = (n) => {   
        let slides = document.getElementsByClassName("slideshow-image");
        let dots = document.getElementsByClassName("dot");
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;
        for (let i = 0; i < slides.length; i++) {  
            slides[i].style.display = "none"; // make all slides invisible
            dots[i].style.backgroundColor = "transparent"; 
        }        
        slides[slideIndex].style.display = "block"; // make given slide visible
        dots[slideIndex].style.backgroundColor = "white"; // fill dot corresponding to current slide
    }

    let timer = Timer(() => {
        let slides = document.getElementsByClassName("slideshow-image");
        if(!slides.length) { // if there are no slides on the page
            window.removeEventListener('keydown', arrowKeyFunc);
            timer.stop();
        } else {
            nextSlide(1);
        }
    }, intervalTime);

    const arrowClick = (leftOrRight) => {
        if(leftOrRight === 'left') nextSlide(-1);
        else if(leftOrRight === 'right') nextSlide(1);
        timer.reset(intervalTime);
    };

    function arrowKeyFunc (keyPress) {
            if (keyPress.keyCode === 37) arrowClick('left'); // if left arrow key is pressed, trigger event
            else if (keyPress.keyCode === 39) arrowClick('right'); // if right arrow key is pressed, trigger event
    };

    /**
     * initializes a slideshow that changes slides after a given interval
     * @param {object} container - DOM element ot store the slideshow images
     * @param {object} imgs - array of strings representing slideshow images to be used in the slideshow
     * @param {number} intervalTime - optional argument specifying milliseconds after which to change the slide
     */
    function initialize (container, imgs, newIntervalTime=intervalTime) {
        loadSlideshowDOM(container, imgs);

        let leftArrow = document.querySelector('a.left-arrow');
        let rightArrow = document.querySelector('a.right-arrow');

        intervalTime = newIntervalTime;

        // if user manually changes slides, change slide and reset timer
        leftArrow.addEventListener('click', () => arrowClick('left'));
        rightArrow.addEventListener('click', () => arrowClick('right'));

        window.addEventListener('keydown', arrowKeyFunc);
        
        let dots = document.getElementsByClassName("dot");
        for(let i=0; i<dots.length; i++) {
            dots[i].addEventListener('click', () => currentSlide(i)); // display slide corresponding to dot
        }

        currentSlide(0); // display slideshow starting with first slide
        timer.reset(intervalTime);

    }

    return { initialize };

})(0, 5000);

/**
 * load home page content
 */
const loadHomePage = function () {
    let content = document.querySelector('div#content');

    // initialize slideshow images
    let slideshowImgs = ['https://captainkva.com/images/comment-bg.jpg',
        'https://captainkva.com/images/slider/slider1.jpg',
        'https://bit.ly/2UTed50',
        'https://img.delicious.com.au/wBUwni4k/del/2018/09/seafood-boil-88619-2.jpg',
        'https://www.simplyrecipes.com/wp-content/uploads/2018/07/Seafood-Paella-HORIZONTAL.jpg'];

    slideshow.initialize(content, slideshowImgs);

    // home page text content
    let text = document.createElement('h1');
    text.setAttribute('id', 'welcome-header');
    text.classList.add('center');
    let welcome = document.createElement('span');
    welcome.textContent = "Welcome to ";
    welcome.setAttribute('id', 'welcome-text');
    let captainK = document.createElement('span');
    captainK.textContent = "Captain K";
    captainK.setAttribute('id', 'captain-k');
    captainK.classList.add('bold');
    
    text.append(welcome, document.createElement('br'), captainK);
    content.appendChild(text);
}

/**
 * load intial site (home page and header)
 */
const loadSite = function() {
    loadHeader();
    loadHomePage();
}

export { loadHomePage, loadSite };