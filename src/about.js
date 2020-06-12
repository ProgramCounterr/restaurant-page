const loadAboutPage = function () {
    let container = document.querySelector('div#content');

    /*let backgroundImage = document.createElement('div');
    backgroundImage.classList.add('background-image');
    backgroundImage.style.cssText = "background-image: url(https://captainkva.com/images/5.jpg)";*/

    let header = document.createElement('h2');
    header.textContent = "About";
    header.setAttribute('id', 'about');
    header.classList.add('bold', 'center');

    let textBox = document.createElement('div');
    let text = document.createElement('p');
    text.textContent = "Cheap, delicious, crispy, fried seafood accompanied by specially crafted homemade sauces";
    text.classList.add('center');

    textBox.appendChild(text);
    container.append(header, textBox);
}

export default loadAboutPage;