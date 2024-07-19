import '../css/style.css';
import itemOrange from '../images/item-1.png';
import itemApple from '../images/item-2.png';
import itemLemonJuice from '../images/item-3.png';
import itemAppleJuice from '../images/item-4.png';
import itemSushi from '../images/item-5.png';


const createMenuPage = () => {
    const content = document.getElementById(`content`);
    const menuPage = document.createElement(`div`);
    const mainHeading = document.createElement(`h1`);
    const subHeading = document.createElement(`p`);
    const menuItems = document.createElement(`div`);
    // create shop item elements
    const item1Container = document.createElement(`div`);
    const item1Title = document.createElement(`h2`);
    const item1Description = document.createElement(`p`);
    const item1Price = document.createElement(`p`);
    item1Container.classList.add(`item1-container`);

    const item2Container = document.createElement(`div`);
    const item2Title = document.createElement(`h2`);
    const item2Description = document.createElement(`p`);
    const item2Price = document.createElement(`p`);
    item2Container.classList.add(`item2-container`);

    const item3Container = document.createElement(`div`);
    const item3Title = document.createElement(`h2`);
    const item3Description = document.createElement(`p`);
    const item3Price = document.createElement(`p`);
    item3Container.classList.add(`item3-container`);

    const item4Container = document.createElement(`div`);
    const item4Title = document.createElement(`h2`);
    const item4Description = document.createElement(`p`);
    const item4Price = document.createElement(`p`);
    item4Container.classList.add(`item4-container`);

    const item5Container = document.createElement(`div`);
    const item5Title = document.createElement(`h2`);
    const item5Description = document.createElement(`p`);
    const item5Price = document.createElement(`p`);
    item5Container.classList.add(`item5-container`);


    menuPage.classList.add(`menu-page`);
    mainHeading.classList.add(`main-heading`);

    mainHeading.innerText = `Menu`;
    subHeading.innerText = `Fun fact: Our menu doesn't actually relate to our brand!`;

    menuItems.classList.add(`menu-items`);

    // create shop items
    const item1 = new Image();
    item1.src = itemOrange;
    item1.height = 200;
    item1.width = 200;
    item1.alt = `Orange`;
    item1.classList.add(`item-1`);
    item1Title.innerText = `Orange`;
    item1Description.innerText = `A freshly squeezed orange.`;
    item1Price.innerText = `PHP 10.00`;

    const item2 = new Image();
    item2.src = itemApple;
    item2.height = 200;
    item2.width = 200;
    item2.alt = `Apple`;
    item2.classList.add(`item-2`);
    item2Title.innerText = `Apple`;
    item2Description.innerText = `An apple bitten by Snow White.`;
    item2Price.innerText = `PHP 20.00`;

    const item3 = new Image();
    item3.src = itemLemonJuice;
    item3.height = 200;
    item3.width = 200;
    item3.alt = `Lemon Juice`;
    item3.classList.add(`item-3`);
    item3Title.innerText = `Lemon Juice`;
    item3Description.innerText = `A not-drugged lemon juice.`;
    item3Price.innerText = `PHP 25.00`;

    const item4 = new Image();
    item4.src = itemAppleJuice;
    item4.height = 200;
    item4.width = 200;
    item4.alt = `Apple Juice`;
    item4.classList.add(`item-4`);
    item4Title.innerText = `Apple Juice`;
    item4Description.innerText = `A not-poisoned apple juice.`;
    item4Price.innerText = `PHP 50.00`;

    const item5 = new Image();
    item5.src = itemSushi;
    item5.height = 200;
    item5.width = 200;
    item5.alt = `Sushi`;
    item5.classList.add(`item-5`);
    item5Title.innerText = `Sushi`;
    item5Description.innerText = `A not-rotten sushi.`;
    item5Price.innerText = `PHP 100.00`;

    // append shop item elements  
    item1Container.appendChild(item1);
    item1Container.appendChild(item1Title);
    item1Container.appendChild(item1Description);
    item1Container.appendChild(item1Price);

    item2Container.appendChild(item2);
    item2Container.appendChild(item2Title);
    item2Container.appendChild(item2Description);
    item2Container.appendChild(item2Price);

    item3Container.appendChild(item3);
    item3Container.appendChild(item3Title);
    item3Container.appendChild(item3Description);
    item3Container.appendChild(item3Price);

    item4Container.appendChild(item4);
    item4Container.appendChild(item4Title);
    item4Container.appendChild(item4Description);
    item4Container.appendChild(item4Price);

    item5Container.appendChild(item5);
    item5Container.appendChild(item5Title);
    item5Container.appendChild(item5Description);
    item5Container.appendChild(item5Price);
    
    // append shop items
    menuItems.appendChild(item1Container);
    menuItems.appendChild(item2Container);
    menuItems.appendChild(item3Container);
    menuItems.appendChild(item4Container);
    menuItems.appendChild(item5Container);

    menuPage.appendChild(mainHeading);
    menuPage.appendChild(subHeading);
    menuPage.appendChild(menuItems);
    
    content.appendChild(menuPage);
}

export default createMenuPage;