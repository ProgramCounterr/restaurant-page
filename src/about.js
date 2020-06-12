const loadAboutPage = function () {
    let container = document.querySelector('div#content');

    let header = document.createElement('h2');
    header.textContent = "About";
    header.setAttribute('id', 'about');
    header.classList.add('bold', 'center');

    let textBox = document.createElement('div');
    let text = document.createElement('p');
    text.textContent = "Cheap, delicious, crispy, fried seafood accompanied by specially crafted homemade sauces";
    textBox.classList.add('center');

    let imgContainer = document.createElement('div');
    


    textBox.appendChild(text);
    container.append(header, textBox);
}

export default loadAboutPage;