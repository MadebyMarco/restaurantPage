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
        const heading = document.createElement("h1");
        heading.textContent = "ABOUT";
        about.appendChild(heading)
        const aboutDescription = document.createElement("div");
        aboutDescription.textContent = "Opened by an old italian man who traversed the world on one leg and with minimal speaking ability. Instead of communicating his feelings through words, he cooked. He learned. He loved. Now, he serves. Welcome to his prized possesion.";
        about.appendChild(aboutDescription);

        appendChildToMainElement(about);
    } 

    function createHours() {
        const hours = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "HOURS";
        hours.appendChild(heading)

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
        const heading = document.createElement("h1");
        heading.textContent = "LOCATIONS";
        location.appendChild(heading)

        const locationMilan = document.createElement("div");

        const locationIcon = document.createElement("img");
        locationIcon.setAttribute("src", "TBD");
        locationMilan.appendChild(locationIcon);
        location.appendChild(locationMilan);

        const locationMilanHeading = document.createElement("div");
        locationMilanHeading.textContent = "Via Roma 202, 34346 Cesano Boscone MI, Italy"
        locationMilan.appendChild(locationMilanHeading);

        const locationRome = document.createElement("div");

        const locationIconRome = document.createElement("img");
        locationIconRome.setAttribute("src", "TBD");
        locationRome.appendChild(locationIconRome);
        location.appendChild(locationRome);

        const locationRomeHeading = document.createElement("div");
        locationRomeHeading.textContent = "Via di Villa Lauchli, 9, 12345 Roma RM, Italy"
        locationRome.appendChild(locationRomeHeading);
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