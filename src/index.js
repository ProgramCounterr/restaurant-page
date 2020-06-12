/* To do:
-Add content for other pages besides home page
*/
import {loadHomePage, loadSite} from './initial.js';
import loadAboutPage from './about.js';

loadSite();

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

const home = document.querySelector('#home');
addEventListeners(home, 'click keydown', () => {
    clearContent();
    loadHomePage();
});


const about = document.querySelector('#about-us');
addEventListeners(about, 'click keydown', () => {
    clearContent();
    loadAboutPage();
});
