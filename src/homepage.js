import starIcon from './images/star.svg';
import mapIcon from './images/map.svg';
import shareIcon from './images/share.svg';
import diningImgSrc from './images/dining.jpg';

export default function initHome() {
    const contentBox = document.getElementById("content");
    const mainInfo = document.createElement("div");
    mainInfo.classList.add("main-info");

    const restInfo = document.createElement("div");
    restInfo.classList.add("restaurant-info");

    const diningImg = document.createElement("img");
    diningImg.src = diningImgSrc;
    diningImg.alt = "Classy dining img";
    diningImg.id = "dining-img";

    const homeText = document.createElement("div");
    homeText.classList.add("home-text");

    const title = document.createElement("h1");
    title.textContent = "The Lux in Luxuries";

    const mainP = document.createElement("p");
    mainP.textContent = "We, at the Lux in Luxuries strive to give the best service possible and the tastiest foods your stomach hasn't tried yet!";

    const review = document.createElement("p");
    review.id = "review";
    review.textContent = "Reviews: 4.9 / 5";

    const homeIcons = document.createElement("div");
    homeIcons.classList.add("home-icons");

    const starImg = document.createElement("img");
    starImg.src = starIcon;
    starImg.alt = "star";
    starImg.classList.add("icon");

    const mapImg = document.createElement("img");
    mapImg.src = mapIcon;
    mapImg.alt = "map";
    mapImg.classList.add("icon");

    const shareImg = document.createElement("img");
    shareImg.src = shareIcon;
    shareImg.alt = "share";
    shareImg.classList.add("icon");

    homeText.appendChild(title);
    homeText.appendChild(mainP);
    homeText.appendChild(review)
    restInfo.appendChild(homeText);
    homeIcons.appendChild(starImg);
    homeIcons.appendChild(mapImg);
    homeIcons.appendChild(shareImg);
    restInfo.appendChild(homeIcons);
    mainInfo.appendChild(restInfo);
    mainInfo.appendChild(diningImg);
    contentBox.appendChild(mainInfo);
}