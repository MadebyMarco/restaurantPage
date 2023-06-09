
// Html skeleton
//   <body style="height: 100%">
//     <div class="heading">Title</div>
//     <div>Nav bar
//         <button >Home</button>
//         <button>Locations</button>
//         <button>Menu</button>
//     </div>
//     <main>
//         <div class="heroImage">Img goes here</div>
//         <div class="about">About</div>
//         <div class="hours">Hours</div>
//         <div class="location">Location</div>
//     </main>
//   </body>

import {homePage} from "./homePage";
import { menuPage }   from "./menuPage"
import { contactPage } from "./contactPage";

const initialPage = (() => {

    function _createContentDiv() {
        const content = document.createElement("div");
        const body = document.querySelector("body");
        content.id = "content";
        body.appendChild(content);
    }    
    
    
    function _createNavBar() {
        const navBar = document.createElement("div");
        navBar.classList.add("nav");
        
        const navButtonHome = document.createElement("button");
        navButtonHome.textContent = "Home";
        navButtonHome.classList.add("highlight");
        
        const navButtonMenu = document.createElement("button");
        navButtonMenu.textContent = "Menu";
        
        const navButtonLocations = document.createElement("button");
        navButtonLocations.textContent = "Contact";
        
        navBar.appendChild(navButtonHome);
        navBar.appendChild(navButtonMenu);
        navBar.appendChild(navButtonLocations);
        
        document.body.appendChild(navBar);
    }    
    const navButtons = () => document.querySelectorAll(".nav button");
    

    function _highlightButton(e) {
        e.target.classList.add("highlight");
        console.log(navButtons());
        
    }

    function _removeHighlightsFromButtons() {
        navButtons().forEach(button => button.classList.remove("highlight"));
    }
    
    function _createHeading(headingContent) {
        const heading = document.createElement("div");
        heading.classList.add("heading");
        heading.textContent = `${headingContent}`;
        
        document.body.appendChild(heading);
    }    
    
    function clearContent() {
        const contentItems = document.querySelectorAll("#content > *");
        contentItems.forEach(item => item.remove());
    }

    
    function _addEventListenersToNavButtons() {
        
        const homeButton = document.querySelector(".nav > button");
        
        homeButton.addEventListener("click", (e) => {
            // console.log("first button work");
            initialPage.clearContent();
            homePage.load();
            _removeHighlightsFromButtons();
            _highlightButton(e);
        });
        
        const menuButton = document.querySelector(".nav > button:nth-child(2)");
        
        menuButton.addEventListener("click", (e) => {
            // console.log("second button work");
            initialPage.clearContent();
            menuPage.load();
            _removeHighlightsFromButtons();
            _highlightButton(e);
        });
        
        const contactButton = document.querySelector(".nav > button:last-child");

        contactButton.addEventListener("click", (e) => {
            // console.log("last button works too");
            initialPage.clearContent();
            contactPage.load();
            _removeHighlightsFromButtons();
            _highlightButton(e);
        });
    }

    function load() {
        _createNavBar();
        _addEventListenersToNavButtons();
        _createHeading("Marco's Italian Medallion");
        _createContentDiv();
        homePage.load();
    }

    return {
        load,
        clearContent
    }
})();
    
    
export default initialPage;

