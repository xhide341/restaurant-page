import createHomePage from './javascript/home';
import createMenuPage from './javascript/menu';
import createAboutPage from './javascript/about';
import createContactPage from './javascript/contact';
import './css/style.css';


const homeButton = document.getElementById(`home-button`);
const menuButton = document.getElementById(`menu-button`);
const aboutButton = document.getElementById(`about-button`);
const contactButton = document.getElementById(`contact-button`);

function clearContent() {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';
}

homeButton.addEventListener(`click`, () => {
    clearContent();
    createHomePage();
});

menuButton.addEventListener(`click`, () => {
    clearContent();
    createMenuPage();
});

aboutButton.addEventListener(`click`, () => {
    clearContent();
    createAboutPage();
});

contactButton.addEventListener(`click`, () => {
    clearContent();
    createContactPage();
});

createContactPage();