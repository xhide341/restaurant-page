import createHomePage from './javascript/home';
import createMenuPage from './javascript/menu';
import './css/style.css';


const homeButton = document.getElementById(`home-button`);
const menuButton = document.getElementById(`menu-button`);
const aboutButton = document.getElementById(`about-button`);
const contactButton = document.getElementById(`contact-button`);

function clearContent() {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';
}

createMenuPage();

homeButton.addEventListener(`click`, () => {
    clearContent();
    createHomePage();
});

menuButton.addEventListener(`click`, () => {
    clearContent();
    createMenuPage();
});

aboutButton.addEventListener(`click`, () => {
    console.log(`About button clicked`);
});

contactButton.addEventListener(`click`, () => {
    console.log(`Contact button clicked`);
});