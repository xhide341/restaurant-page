import '../css/style.css';
import minionImage from '../images/minion.webp';

const createAboutPage = () => {
    const content = document.getElementById(`content`);
    const aboutPage = document.createElement(`div`);
    const mainHeading = document.createElement(`h1`);
    const headingContainer = document.createElement(`div`);
    const subHeading = document.createElement(`p`);

    aboutPage.classList.add(`about-page`);
    headingContainer.classList.add(`heading-container`);
    mainHeading.classList.add(`main-heading`);
    subHeading.classList.add(`sub-heading`);

    mainHeading.innerText = `About Us`;
    subHeading.innerText = `Welcome to Green Leaf Cafe, where banana-loving enthusiasm meets eco-friendly dining! Our cafe was founded by Bob, a lovable yellow minion with a passion for sustainable cuisine and a slight obsession with bananas. After years of assisting in evil schemes, Bob decided to channel his boundless energy into creating a haven for health-conscious foodies and mischief-makers alike. At Green Leaf Cafe, we serve up delicious, planet-friendly dishes with a side of minion-style chaos. Don't be surprised if you hear the occasional "bello" or "papoy" from our kitchen – that's just Bob expressing his culinary excitement! Join us for a meal that's good for you, good for the Earth, and guaranteed to make you smile wider than a minion spotting a banana.`

    const minion = new Image();
    minion.src = minionImage;
    minion.height = 500;
    minion.width = 500;
    minion.alt = `Minion`;
    minion.classList.add(`minion-image`);

    headingContainer.appendChild(mainHeading);
    headingContainer.appendChild(subHeading);

    aboutPage.appendChild(headingContainer);
    aboutPage.appendChild(minion);

    content.appendChild(aboutPage);
}


export default createAboutPage;