function createHomePage() {
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
    
    export {createHomePage};