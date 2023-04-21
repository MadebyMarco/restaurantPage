const homePage = (()=> {


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
    
    function load() {
        createMain();
        createAbout();
        createHours();
        createLocation();
    }

    return {load}
})();
    export {homePage};