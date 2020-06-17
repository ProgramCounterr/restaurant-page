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

// slide show logic
const slideShow = ((slideIndex) => {

    // slide show timer
    const Timer = (fn, t) => {
        let timerObj = setInterval(fn, t);

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
                timerObj = setInterval(fn, t);
            }
        }

        // start with new or original interval, stop current interval
        const reset = (newT = t) => {
            t = newT;
            stop();
            start();
        }

        return { stop, start, reset };
    };

    const nextSlide = (n) => {  
        displaySlide(slideIndex += n);  
    }  
    
    const currentSlide = (n) => {
        displaySlide(slideIndex = n);
    }

    let interval = 5000;
    let timer = Timer(() => nextSlide(1), interval);

    const displaySlide = (n) => {   
        let slides = document.getElementsByClassName("background-image");
        let dots = document.getElementsByClassName("dot");
        if (n >= slides.length) { slideIndex = 0 }  
        if (n < 0) { slideIndex = slides.length - 1 }  
        for (let i = 0; i < slides.length; i++) {  
            slides[i].style.display = "none"; // make all slides invisible
            dots[i].style.backgroundColor = "transparent"; 
        }  
        slides[slideIndex].style.display = "block"; // make given slide visible
        dots[slideIndex].style.backgroundColor = "white";
        timer.reset(interval);
    }
    /**
     * initializes a slideshow that changes slides after a given interval
     * @param {number} intervalTime - milliseconds after which to change the slide
     */
    function initialize (intervalTime) {
        if(!!intervalTime) {
            interval = intervalTime;
            timer.reset(interval);
        }
        let leftArrow = document.querySelector('a.left-arrow');
        leftArrow.addEventListener('click', () => nextSlide(-1));
        let rightArrow = document.querySelector('a.right-arrow');
        rightArrow.addEventListener('click', () => nextSlide(1));
        window.addEventListener('keydown', (keyPress) => {
            if (keyPress.keyCode === 37) leftArrow.click(); // if left arrow key is pressed
            else if (keyPress.keyCode === 39) rightArrow.click(); // if right arrow key is pressed
        });
        
        let dots = document.getElementsByClassName("dot");
        for(let i=0; i<dots.length; i++) {
            dots[i].addEventListener('click', () => currentSlide(i));
        }
        displaySlide(1);
    }

    return { initialize };

})(0);

const loadHomePage = function () {
    let content = document.querySelector('div#content');

    // home page background images
    let backgroundImgs = ['https://captainkva.com/images/comment-bg.jpg',
        'https://captainkva.com/images/slider/slider1.jpg',
        'https://assets.epicurious.com/photos/5764583142e4a5ed66d1df6c/2:1/w_1260%2Ch_630/seafood-paella.jpg',
        'https://img.delicious.com.au/wBUwni4k/del/2018/09/seafood-boil-88619-2.jpg',
        'https://www.simplyrecipes.com/wp-content/uploads/2018/07/Seafood-Paella-HORIZONTAL.jpg'];

    let leftArrow = document.createElement('a');
    leftArrow.textContent = '❮';
    leftArrow.classList.add('left-arrow');
    let rightArrow = document.createElement('a');
    rightArrow.textContent = '❯';
    rightArrow.classList.add('right-arrow');

    let dotsContainer = document.createElement('div');
    dotsContainer.setAttribute('id', 'dots');
    for(let i=0; i<backgroundImgs.length; i++) {
        let backgroundImg = document.createElement('div');
        backgroundImg.classList.add('background-image');
        backgroundImg.style.cssText = `background-image: url(${backgroundImgs[i]})`;

        let dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.append(dot);
        content.append(backgroundImg);
    }
    content.append(leftArrow, rightArrow, dotsContainer);

    slideShow.initialize();

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

const loadSite = function() {
    loadHeader();
    loadHomePage();
}

export { loadHomePage, loadSite };