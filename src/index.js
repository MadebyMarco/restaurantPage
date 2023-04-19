import { createHomePage } from "./homePage";
import myPage from "./initialPageLoading";
import { menuPage }   from "./menuPage"

myPage.loadDefault();



function addEventListenersToNavButtons() {

    const homeButton = document.querySelector(".nav > button");

    homeButton.addEventListener("click", () => {
        console.log("first button work");
        myPage.clearContent();
        createHomePage();
    });

    const menuButton = document.querySelector(".nav > button:nth-child(2)");
    
    menuButton.addEventListener("click", () => {
        console.log("second button work");
        myPage.clearContent();
        menuPage.createMain();
    });

    const lastButton = document.querySelector(".nav > button:last-child");
    lastButton.addEventListener("click", () => console.log("last button works too"));
}

addEventListenersToNavButtons();