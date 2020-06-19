/* TODO:
-Add content for other pages besides home page
-Fix resizing/moving elements
-Make keydown tabbing only work for enter key (check keycode)
-refactor css and js files
-lint js files
-add slideshow on homepage
*/
import { loadHomePage, loadSite } from './initial';
import loadAboutPage from './about';
import loadContactPage from './contact';

/**
 * clears content of the page
 */
function clearContent() {
  const content = document.querySelector('div#content');
  content.innerHTML = '';
}

loadSite();

const home = document.querySelector('#home');
const about = document.querySelector('#about-us');
const contact = document.querySelector('#contact-us');

const navbarTabs = [home, about, contact];
const navbarFuncs = [loadHomePage, loadAboutPage, loadContactPage];

for (let i = 0; i < navbarTabs.length; i += 1) {
  navbarTabs[i].addEventListener('click', () => {
    clearContent();
    navbarFuncs[i]();
  });
  navbarTabs[i].addEventListener('keydown', (keyPress) => {
    if (keyPress.keyCode === 13) {
      clearContent();
      navbarFuncs[i]();
    }
  });
}
