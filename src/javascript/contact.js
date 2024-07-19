import '../css/style.css';

const createContactPage = () => {
    const content = document.getElementById(`content`);
    const contactPage = document.createElement(`div`);
    const mainHeading = document.createElement(`h1`);
    const subHeading = document.createElement(`p`);
    const contactContainer = document.createElement(`div`);
    
    contactPage.classList.add(`contact-page`);
    mainHeading.classList.add(`main-heading`);
    subHeading.classList.add(`sub-heading`);
    contactContainer.classList.add(`contact-container`);
    
    mainHeading.innerText = `Contact`;
    subHeading.innerText = `We're always happy to hear from you! Feel free to reach out to us at any time. We'll be more than happy to help you out!`;

    const contactInfo = `
        <p>🍌 Address: 123 Banana Lane, Minion City, Gru's Neighborhood 54321</p>
        <p>📞 Phone: 1-800-BANANAA (1-800-226-2622)</p>
        <p>📧 Email: bob@greenleafcafe.minion</p>
        <p>🕒 Hours: Open daily from sunrise to moonrise (or until Bob gets distracted)</p>
        <p>🌐 Website: www.greenleafcafe.minion</p>
        <h3>📱 Social Media:</h3>
        <ul>
            <li>Insta-banana: @GreenLeafMinion</li>
            <li>Twit-papoy: @BobsGreenLeaf</li>
            <li>FaceBook: Green Leaf Cafe (Look for the page with banana reactions)</li>
        </ul>
        <p>🚀 Delivery: Available via Minion Rush Delivery Service (Warning: Your food may arrive slightly squashed but with extra laughs)</p>
        <p>💬 For Reservations: Just yell "Banana!" outside our cafe. We'll hear you.</p>
        <p>🎉 Special Events: Ask about our "Despicable Delights" nights every full moon!</p>
    `;


    contactContainer.innerHTML = contactInfo;

    contactPage.appendChild(mainHeading);
    contactPage.appendChild(subHeading);
    contactPage.appendChild(contactContainer);

    content.appendChild(contactPage);
}

export default createContactPage;