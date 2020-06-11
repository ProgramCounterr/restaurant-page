let loadHeader = function() {
        let body = document.querySelector('body');

        //make header elements
        let header = document.createElement('header');
        let navBar = document.createElement('nav');
        let ul = document.createElement('ul');

        let home = document.createElement('li');
        home.textContent = "Home";
        home.setAttribute('id', 'home');
        home.setAttribute('tabindex', '1');

        let orderOnline = document.createElement('li');
        orderOnline.textContent = "Order Online";
        orderOnline.setAttribute('id', 'order-online');
        orderOnline.setAttribute('tabindex', '2');

        let contactUs = document.createElement('li');
        contactUs.textContent = "Contact Us";
        contactUs.setAttribute('id', 'contact-us');
        contactUs.setAttribute('tabindex', '3');

        //append elements
        ul.append(home, orderOnline, contactUs);
        navBar.appendChild(ul);
        header.appendChild(navBar);
        body.prepend(header);
}

let loadHomePage = function () {
    let container = document.querySelector('div#content');

    //home page content
    let backgroundImg = document.createElement('img');
    backgroundImg.setAttribute('id', 'background-img');
    backgroundImg.setAttribute('src', 'https://captainkva.com/images/3.jpg');

    container.append(backgroundImg);
}

let loadSite = function() {
    loadHeader();
    loadHomePage();
}

export {loadHeader, loadHomePage, loadSite };