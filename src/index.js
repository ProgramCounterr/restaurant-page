/* To do:
-Add event handler for pressing enter on a focused navbar element
-Add content for other pages besides home page
*/
import {loadHeader, loadHomePage, loadSite} from './initial.js';

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
function addEventListeners(element, events, listener) {
    
}

let home = document.querySelector('#home');
home.addEventListener('click', () => {
    clearContent();
    loadHomePage();
});

home.addEventListener('keydown', () => {
    clearContent();
    loadHomePage();
});

let order = document.querySelector('#order-online');
order.addEventListener('click', ()=> {
    clearContent();
});

