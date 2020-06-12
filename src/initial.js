let loadHeader = function() {
        let container = document.querySelector('div#content');

        //make header elements
        let header = document.createElement('header');
        let navBar = document.createElement('nav');
        let ul = document.createElement('ul');

        let home = document.createElement('li');
        home.textContent = "Home";
        home.setAttribute('id', 'home');
        home.setAttribute('tabindex', '1');

        let orderOnline = document.createElement('li');
        let link = document.createElement('a');
        link.textContent = "Order Online";
        link.setAttribute('id', 'order-online');
        link.setAttribute('tabindex', '2');
        link.setAttribute('href', 'https://qmenu.us/#/captain-k-s-seafood');
        orderOnline.appendChild(link);


        let contactUs = document.createElement('li');
        contactUs.textContent = "Contact Us";
        contactUs.setAttribute('id', 'contact-us');
        contactUs.setAttribute('tabindex', '3');

        //append elements
        ul.append(home, orderOnline, contactUs);
        navBar.appendChild(ul);
        header.appendChild(navBar);
        container.append(header);
}

let loadHomePage = function () {
    let container = document.querySelector('div#content');

    //home page content
    let imgContainer = document.createElement('div');
    imgContainer.setAttribute('id', 'background-img');

    let text = document.createElement('h1');
    text.setAttribute('id', 'welcome-header');
    let welcome = document.createElement('span');
    welcome.textContent = "Welcome to ";
    welcome.setAttribute('id', 'welcome-text');
    let captainK = document.createElement('span');
    captainK.textContent = "Captain K";
    captainK.setAttribute('id', 'captain-k');
    captainK.classList.add('bold');

    text.append(welcome, document.createElement('br'), captainK);
    container.append(imgContainer, text);
}

let loadSite = function() {
    loadHeader();
    loadHomePage();
}

export {loadHomePage, loadSite};