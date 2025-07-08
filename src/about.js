export default function initAbout() {
    const contentBox = document.getElementById("content");

    const aboutDisplay = document.createElement("div");
    aboutDisplay.classList.add("about-display");

    const titleAbout = document.createElement("h1");
    titleAbout.classList.add("title-styling");
    titleAbout.textContent = "About us";
    titleAbout.classList.add("aboutTitle");

    const ourStory = document.createElement("div")
    ourStory.classList.add("story-card");
    const storyTitle = document.createElement("h1");
    storyTitle.textContent = "Our Story"
    const storyInfo = document.createElement("p");
    storyInfo.textContent = "We starting serving food in 1984 where our creator Raihan Carder had a vision to serve the most amazing food possible."
    ourStory.appendChild(storyTitle);
    ourStory.appendChild(storyInfo);

    const location = document.createElement("div")
    location.classList.add("location-card");
    const locationTitle = document.createElement("h1");
    locationTitle.textContent = "Our Location"
    const locationInfo = document.createElement("p");
    locationInfo.textContent = "We're currently located @ FakeAddress, Toronto On, Canada."
    location.appendChild(locationTitle);
    location.appendChild(locationInfo);

    const contactUs = document.createElement("div")
    contactUs.classList.add("contact-card");
    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact us:"
    const contactInfo = document.createElement("p");
    contactInfo.classList.add("important-info")
    contactInfo.textContent = "Contact us @ 293-492-9999."
    contactUs.appendChild(contactTitle);
    contactUs.appendChild(contactInfo);

    const mapFrame = document.createElement("iframe");
    mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.67410279353!2d-79.54286566702457!3d43.7181228038289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1752007600965!5m2!1sen!2sca";

    mapFrame.style.border = "0";
    mapFrame.allowFullscreen = true;
    mapFrame.loading = "lazy";
    mapFrame.referrerPolicy = "no-referrer-when-downgrade";
    mapFrame.classList.add("map");
    location.appendChild(mapFrame);

    aboutDisplay.appendChild(titleAbout);
    aboutDisplay.appendChild(ourStory);
    aboutDisplay.appendChild(location);
    aboutDisplay.appendChild(contactUs);
    contentBox.appendChild(aboutDisplay);
}