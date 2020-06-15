/* To do:
-Add content for other pages besides home page
-Fix resizing/moving elements
-Make keydown tabbing only work for enter key
*/
import {loadHomePage, loadSite} from './initial.js';
import loadAboutPage from './about.js';
import loadContactPage from './contact.js';

/**
 * clears content of the page
 */
function clearContent() {
    let content = document.querySelector('div#content');
    content.innerHTML = "";
}

/** Add one or more listeners to an element
* @param {DOMElement} element - DOM element to add listeners to
* @param {string} eventNames - space separated list of event names, e.g. 'click change'
* @param {Function} listener - function to attach for each event as a listener
*/
function addEventListeners(element, eventsString, listener) {
    let events = eventsString.split(' ');
    for(let i=0; i<events.length; i++) {
        element.addEventListener(events[i], listener);
    }
}

loadSite();

const home = document.querySelector('#home');
const about = document.querySelector('#about-us');
const contact = document.querySelector('#contact-us');

let navbarTabs = [home, about, contact];
let navbarFuncs = [loadHomePage, loadAboutPage, loadContactPage];

for(let i=0; i<navbarTabs.length; i++) {
    addEventListeners(navbarTabs[i], 'click keydown', () => {
        clearContent();
        navbarFuncs[i]();
    });
}