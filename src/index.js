import "./styles.css";
import initHome from "./homepage";
import initMenu from "./menu";

function initPage() {
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu");
    const aboutBtn = document.getElementById("about");
    const nav = createNavigation();

    initHome();

    homeBtn.addEventListener("click", (e) => nav.getNavId(e));
    menuBtn.addEventListener("click", (e) => nav.getNavId(e));
    aboutBtn.addEventListener("click", (e) => nav.getNavId(e));
}

function createNavigation() {
    const contentBox = document.getElementById("content");

    function getNavId(e) {
        const id = e.target.id;
        _clearPage();

        if (id === "home") {
            initHome();
        }
        else if (id === "menu") {
            initMenu();
        }
        else if (id === "about") {
            console.log("not done");
        }
    }

    function _clearPage() {
        contentBox.textContent = "";
    }

    return { getNavId }
}

window.addEventListener("DOMContentLoaded", initPage);