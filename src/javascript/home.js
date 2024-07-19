import matchaLogo from '../images/matcha_image.png';
import matchaMascot from '../images/matcha_mascot.webp';
import '../css/style.css';

const createHomePage = () => {
    const content = document.getElementById(`content`);
    const homePage = document.createElement(`div`);

    homePage.classList.add(`homepage`);

    // add matcha image
    const matcha_image = new Image();
    matcha_image.src = matchaLogo;
    matcha_image.height = 300;
    matcha_image.width = 300;
    matcha_image.classList.add(`matcha-image`);
    homePage.appendChild(matcha_image);

    // add matcha-mascot image
    const matcha_mascot = new Image();
    matcha_mascot.src = matchaMascot;
    matcha_mascot.height = 100;
    matcha_mascot.width = 200;
    matcha_mascot.classList.add(`matcha-mascot`);
    homePage.appendChild(matcha_mascot);

    // add text
    const homeHeading = document.createElement(`div`);
    const mainHeading = document.createElement(`h1`);
    const mainHeadingSpan = document.createElement(`span`);
    const br = document.createElement(`br`);
    const subHeading = document.createElement(`p`);
    const subText = document.createElement(`p`);
    const footer = document.createElement(`footer`);
    const footerSpan = document.createElement(`span`);

    homeHeading.classList.add(`home-heading`);
    mainHeading.classList.add(`main-heading`);

    mainHeading.innerText = `Welcome to `;
    mainHeadingSpan.innerText = `Green Leaf Café`;
    mainHeading.appendChild(mainHeadingSpan);

    subHeading.innerText = `We are a small café that serves delicious coffee and pastries.`;
    subText.innerText = `Feel free to browse our menu or contact us for any queries.`;

    footerSpan.innerText = `Copyright © 2022 Green Leaf Café. All rights reserved.`;
    footer.appendChild(footerSpan);
    

    homeHeading.appendChild(mainHeading);
    homeHeading.appendChild(subHeading);
    homeHeading.appendChild(subText);
    
    homePage.appendChild(homeHeading);

    content.appendChild(homePage);
    content.appendChild(footer);
}

export default createHomePage;