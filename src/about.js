const loadAboutPage = function () {
    let content = document.querySelector('div#content');

    let header = document.createElement('h2');
    header.textContent = "About";
    header.classList.add('bold');
    header.setAttribute('id', 'about-header');

    let text = document.createElement('p');
    text.textContent = "Cheap, delicious, crispy, fried seafood accompanied by specially crafted homemade sauces";
    text.setAttribute('id', 'about-text');

    let images = document.createElement('div');
    images.classList.add('row');
    images.setAttribute('id', 'about-images-container');
    let imgContainer1 = document.createElement('div');
    imgContainer1.classList.add('column');
    let img1 = document.createElement('img');
    img1.setAttribute('src', 'https://ketocookingchristian.com/wp-content/uploads/2019/11/Keto-Fried-Shrimp.jpg');
    img1.setAttribute('alt', 'Fried shrimp and a side of cocktail sauce');
    let imgContainer2 = document.createElement('div');
    imgContainer2.classList.add('column');
    let img2 = document.createElement('img');
    img2.setAttribute('src', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-191907-air-fryer-fish-0264-landscape-pf-1565020342.png?crop=0.633xw:0.949xh;0.187xw,0.0230xh&resize=480:*');
    img2.setAttribute('alt', 'Fried whiting fish with fries and a side of ranch');
    let imgContainer3 = document.createElement('div');
    imgContainer3.classList.add('column');
    let img3 = document.createElement('img');
    img3.setAttribute('src', 'https://www.readersdigest.ca/wp-content/uploads/1970/08/fried-calamari-1024x671.jpg');
    img3.setAttribute('alt', 'Fried calamari rings');

    imgContainer1.appendChild(img1);
    imgContainer2.appendChild(img2);
    imgContainer3.appendChild(img3);
    images.append(imgContainer1, imgContainer2, imgContainer3);
    content.append(header, text, images);
}

export default loadAboutPage;