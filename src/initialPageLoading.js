
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
        mainElement.appendChild(heroImageContainer);

        document.querySelector("#content").appendChild(mainElement);
        
    }   
    
    function appendChildToMainElement(child) {
        return document.querySelector("main").appendChild(child);
    }

    
    function createAbout() {
        const about = document.createElement("div");
        about.textContent = "About";
        const aboutDescription = document.createElement("div");
        aboutDescription.textContent = "The Italian Stallion  Test";
        about.appendChild(aboutDescription);

        appendChildToMainElement(about);
    } 

    function createHours() {
        const hours = document.createElement("div");
        hours.textContent = "Hours";
        const hoursUnorderedList = document.createElement("ul");
        const createHoursListItems = () => {
            for(let i = 0; i < 5; i++) {
                const item = document.createElement("li");

                switch (i) {
                    case 0:
                        item.textContent = "Monday: 5am - 12pm ";
                        break;
                    case 1:
                        item.textContent = "Tuesday: 5am - 12pm" ;
                        break;
                    case 2:
                        item.textContent = "Wednesday: 5am - 12pm";
                        break;
                    case 3:
                        item.textContent = "Thursday: 5am - 12pm ";
                        break;
                    case 4:
                        item.textContent = "Friday: 5am - 12pm";
                        break;
                    case 5:
                        item.textContent = "Saturday: 5am - 12pm";
                        break;
                    case 6:
                        item.textContent = "Sunday: 5am - 12pm";
                        break;
                
                    default: console.log("error with list items");
                        break;
                }
                
                hoursUnorderedList.appendChild(item);
            }
        } 
        createHoursListItems();

        hours.appendChild(hoursUnorderedList);

        appendChildToMainElement(hours);
    }

    function createLocation() {
        const location = document.createElement("div");
        location.textContent = "Locations";
        appendChildToMainElement(location);
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
            menuPage.load();
        });
        
        const lastButton = document.querySelector(".nav > button:last-child");
        lastButton.addEventListener("click", () => console.log("last button works too"));
    }

    function loadDefault() {
        createNavBar();
        addEventListenersToNavButtons();
        createHeading("Marco's Italian Medallion");
        createContentDiv();
        createMain();
        createAbout();
        createHours();
        createLocation();
    }

    return {
        loadDefault,
        clearContent
    }
})();
    
    
export default myPage;

