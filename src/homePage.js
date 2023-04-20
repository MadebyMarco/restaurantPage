function createHomePage() {
        const mainElement = document.createElement("main");
        
        const heroImageContainer = document.createElement("div");
        heroImageContainer.classList.add("heroImage")
        
        const about = document.createElement("div");
        about.textContent = "About";
        const aboutDescription = document.createElement("div");
        aboutDescription.textContent = "To be decided";
        about.appendChild(aboutDescription);
        
        
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
        const location = document.createElement("div");
        location.textContent = "Locations";
        
        
        mainElement.appendChild(heroImageContainer);
        mainElement.appendChild(about);
        mainElement.appendChild(hours);
        mainElement.appendChild(location);
        
        document.querySelector("#content").appendChild(mainElement);
    }
    
    export {createHomePage};