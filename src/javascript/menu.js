import '../css/style.css';
import matchaPotion from '../images/matcha-potion.jpg';

const createMenuPage = () => {
    const content = document.getElementById(`content`);
    const menuPage = document.createElement(`div`);
    const mainHeading = document.createElement(`h1`);
    const subHeading = document.createElement(`p`);
    const menuItems = document.createElement(`div`);

    menuPage.classList.add(`menu-page`);
    mainHeading.classList.add(`main-heading`);

    mainHeading.innerText = `Menu`;
    subHeading.innerText = `Our menu is always changing, so come back soon!`;

    menuItems.classList.add(`menu-items`);

    const matcha_potion = new Image();
    matcha_potion.src = matchaPotion;
    matcha_potion.height = 200;
    matcha_potion.width = 200;
    matcha_potion.alt = `Matcha Potion`;
    matcha_potion.classList.add(`matcha-potion`);
    menuItems.appendChild(matcha_potion);


    menuPage.appendChild(mainHeading);
    menuPage.appendChild(subHeading);
    menuPage.appendChild(menuItems);




    
    content.appendChild(menuPage);
}

export default createMenuPage;