
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

import { createHomePage } from "./homePage";
import { menuPage }   from "./menuPage"

const myPage = (() => {

    function createContentDiv() {
        const content = document.createElement("div");
        const body = document.querySelector("body");
        content.id = "content";
        body.appendChild(content);
    }    
    
    
    function createNavBar() {
        const navBar = document.createElement("div");
        navBar.classList.add("nav");
        
        const navButtonHome = document.createElement("button");
        navButtonHome.textContent = "Home";
        
        const navButtonMenu = document.createElement("button");
        navButtonMenu.textContent = "Menu";
        
        const navButtonLocations = document.createElement("button");
        navButtonLocations.textContent = "Contact";
        
        navBar.appendChild(navButtonHome);
        navBar.appendChild(navButtonMenu);
        navBar.appendChild(navButtonLocations);
        
        document.body.appendChild(navBar);
    }    
    
    function createHeading(headingContent) {
        const heading = document.createElement("div");
        heading.classList.add("heading");
        heading.textContent = `${headingContent}`;
        
        document.body.appendChild(heading);
    }    
    
    function createMain() {
        const mainElement = document.createElement("main");
        
        const heroImageContainer = document.createElement("div");
        heroImageContainer.classList.add("heroImage")
        
        const about = document.createElement("div");
        about.textContent = "About";
        const aboutDescription = document.createElement("div");
        aboutDescription.textContent = "Monday: 5am - 12am Tuesday: 5am - 12am Wednesday: 5am - 12am Thursday: 5am - 12am Friday: 5am - 12am Saturday: 5am - 12am Sunday: 5am - 12am";
        about.appendChild(aboutDescription);
        
        const hours = document.createElement("div");
        hours.textContent = "Hours";
        
        const location = document.createElement("div");
        location.textContent = "Locations";
        
        
        mainElement.appendChild(heroImageContainer);
        mainElement.appendChild(about);
        mainElement.appendChild(hours);
        mainElement.appendChild(location);
        
        document.querySelector("#content").appendChild(mainElement);
    }    

    function clearContent() {
        const contentItems = document.querySelectorAll("#content > *");
        contentItems.forEach(item => item.remove());
    }

    
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

    function loadDefault() {
        createNavBar();
        addEventListenersToNavButtons();
        createHeading("Heading test");
        createContentDiv();
        createMain();
    }

    return {
        loadDefault,
        clearContent
    }
})();
    
    
export default myPage;

