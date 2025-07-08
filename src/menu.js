import burgerImage from './images/hamburger.jpg'
import cakeImage from './images/cake.jpg'
import sushiImage from './images/sushi.jpg'
import ramenImage from './images/ramen.jpg'
import friedChickenImage from './images/fried-chicken.jpg'
import spaghettiImage from './images/spaghetti.jpg'



export default function initMenu() {
    const contentBox = document.getElementById("content");

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const burgerItem = document.createElement("div")
    const burgerTitle = document.createElement("h1")
    const burgerPrice = document.createElement("p");
    const burgerImg = document.createElement("img");
    const burgetDesc = document.createElement("p");
    burgetDesc.classList.add("description-item");
    burgetDesc.textContent = "Delicious burger made with the most luxurious ingredients around!";
    burgerImg.classList.add("photo-item");
    burgerImg.src = burgerImage;
    burgerImg.alt = "Burger";
    burgerPrice.classList.add("price-item");
    burgerPrice.textContent = "$40";
    burgerTitle.classList.add("name-item");
    burgerTitle.classList.add("title-styling");
    burgerTitle.textContent = "Deluxe Burger";
    burgerItem.classList.add("menu-item");
    burgerItem.appendChild(burgerTitle);
    burgerItem.appendChild(burgerPrice);
    burgerItem.appendChild(burgerImg);
    burgerItem.appendChild(burgetDesc);
    menu.appendChild(burgerItem);

    const sushiItem = document.createElement("div")
    const sushiTitle = document.createElement("h1")
    const sushiPrice = document.createElement("p");
    const sushiImg = document.createElement("img");
    const sushiDesc = document.createElement("p");
    sushiDesc.classList.add("description-item");
    sushiDesc.textContent = "Sushi where we have divers dive into the deepest waters to get the freshest fish possible.";
    sushiImg.classList.add("photo-item");
    sushiImg.src = sushiImage;
    sushiImg.alt = "Sushi";
    sushiPrice.classList.add("price-item");
    sushiPrice.textContent = "$70";
    sushiTitle.classList.add("name-item");
    sushiTitle.classList.add("title-styling");
    sushiTitle.textContent = "Sushi Yum Yum";
    sushiItem.classList.add("menu-item");
    sushiItem.appendChild(sushiTitle);
    sushiItem.appendChild(sushiPrice);
    sushiItem.appendChild(sushiImg);
    sushiItem.appendChild(sushiDesc);
    menu.appendChild(sushiItem);

    const cakeItem = document.createElement("div");
    const cakeTitle = document.createElement("h1");
    const cakePrice = document.createElement("p");
    const cakeImg = document.createElement("img");
    const cakeDesc = document.createElement("p");
    cakeDesc.classList.add("description-item");
    cakeDesc.textContent = "Sweet and creamy cake to finish your meal perfectly.";
    cakeImg.classList.add("photo-item");
    cakeImg.src = cakeImage;
    cakeImg.alt = "Cake";
    cakePrice.classList.add("price-item");
    cakePrice.textContent = "$25";
    cakeTitle.classList.add("name-item");
    cakeTitle.classList.add("title-styling");
    cakeTitle.textContent = "Cake Delight";
    cakeItem.classList.add("menu-item");
    cakeItem.append(cakeTitle, cakePrice, cakeImg, cakeDesc);
    menu.appendChild(cakeItem);

    const ramenItem = document.createElement("div");
    const ramenTitle = document.createElement("h1");
    const ramenPrice = document.createElement("p");
    const ramenImg = document.createElement("img");
    const ramenDesc = document.createElement("p");
    ramenDesc.classList.add("description-item");
    ramenDesc.textContent = "Warm and hearty ramen with a rich broth and fresh ingredients.";
    ramenImg.classList.add("photo-item");
    ramenImg.src = ramenImage;
    ramenImg.alt = "Ramen";
    ramenPrice.classList.add("price-item");
    ramenPrice.textContent = "$35";
    ramenTitle.classList.add("name-item");
    ramenTitle.classList.add("title-styling");
    ramenTitle.textContent = "Ramen Bowl";
    ramenItem.classList.add("menu-item");
    ramenItem.append(ramenTitle, ramenPrice, ramenImg, ramenDesc);
    menu.appendChild(ramenItem);

    const friedChickenItem = document.createElement("div");
    const friedChickenTitle = document.createElement("h1");
    const friedChickenPrice = document.createElement("p");
    const friedChickenImg = document.createElement("img");
    const friedChickenDesc = document.createElement("p");
    friedChickenDesc.classList.add("description-item");
    friedChickenDesc.textContent = "Crispy fried chicken with special house seasoning.";
    friedChickenImg.classList.add("photo-item");
    friedChickenImg.src = friedChickenImage;
    friedChickenImg.alt = "Fried Chicken";
    friedChickenPrice.classList.add("price-item");
    friedChickenPrice.textContent = "$45";
    friedChickenTitle.classList.add("name-item");
    friedChickenTitle.classList.add("title-styling");
    friedChickenTitle.textContent = "Fried Chicken Feast";
    friedChickenItem.classList.add("menu-item");
    friedChickenItem.append(friedChickenTitle, friedChickenPrice, friedChickenImg, friedChickenDesc);
    menu.appendChild(friedChickenItem);

    const spaghettiItem = document.createElement("div");
    const spaghettiTitle = document.createElement("h1");
    const spaghettiPrice = document.createElement("p");
    const spaghettiImg = document.createElement("img");
    const spaghettiDesc = document.createElement("p");
    spaghettiDesc.classList.add("description-item");
    spaghettiDesc.textContent = "Classic spaghetti with rich tomato sauce and fresh herbs.";
    spaghettiImg.classList.add("photo-item");
    spaghettiImg.src = spaghettiImage;
    spaghettiImg.alt = "Spaghetti";
    spaghettiPrice.classList.add("price-item");
    spaghettiPrice.textContent = "$30";
    spaghettiTitle.classList.add("name-item");
    spaghettiTitle.classList.add("title-styling");
    spaghettiTitle.textContent = "Spaghetti Supreme";
    spaghettiItem.classList.add("menu-item");
    spaghettiItem.append(spaghettiTitle, spaghettiPrice, spaghettiImg, spaghettiDesc);
    menu.appendChild(spaghettiItem);

    contentBox.append(menu);
}