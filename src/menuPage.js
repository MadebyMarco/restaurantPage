const menuPage = (() => {

    const _createMain = () => {
        const mainElement = document.createElement("main");
        mainElement.classList.add("menuPage");
        document.querySelector("#content").appendChild(mainElement);
    }

    const _getMain = () => {
        return document.querySelector("main");
    }
    
    const _createAntipasti = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "ANTIPASTI";
        const unorderedList = document.createElement("ul");
        const createListItems = () => {
            for(let i = 0; i < 5; i++) {
                const item = document.createElement("li");

                switch (i) {
                    case 0:
                        item.textContent = "Italian Bread";
                        break;
                    case 1:
                        item.textContent = "Asparagus";
                        break;
                    case 2:
                        item.textContent = "Roasted Eggplant Spread";
                        break;
                    case 3:
                        item.textContent = "Beef Spiedini";
                        break;
                    case 4:
                        item.textContent = "Focaccia Barese";
                        break;
                
                    default: console.log("error with list items");
                        break;
                }
                
                unorderedList.appendChild(item);
            }
        } 
        createListItems();

        container.appendChild(heading);
        container.appendChild(unorderedList);

        _getMain().appendChild(container);

    }



     const _createPrimi = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "PRIMI";
        const unorderedList = document.createElement("ul");
        const createListItems = () => {
            for(let i = 0; i < 5; i++) {
                const item = document.createElement("li");

                switch (i) {
                    case 0:
                        item.textContent = "Ribollita";
                        break;
                    case 1:
                        item.textContent = "Pasta e Fagioli";
                        break;
                    case 2:
                        item.textContent = "Gnocchi di Patate al Ragu";
                        break;
                    case 3:
                        item.textContent = "Pappardelle al Coniglio";
                        break;
                    case 4:
                        item.textContent = "Risotto ai Carciofi";
                        break;
                
                    default: console.log("error with list items");
                        break;
                }
                
                unorderedList.appendChild(item);
            }
        } 
        createListItems();

        container.appendChild(heading);
        container.appendChild(unorderedList);

        _getMain().appendChild(container);

    }

    const _createSecondi = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "SECONDI";
        const unorderedList = document.createElement("ul");
        const createListItems = () => {
            for(let i = 0; i < 5; i++) {
                const item = document.createElement("li");

                switch (i) {
                    case 0:
                        item.textContent = "Trippa Alla Fiorentina";
                        break;
                    case 1:
                        item.textContent = "Peposo";
                        break;
                    case 2:
                        item.textContent = "Tagliata Rucola e Parmigiano";
                        break;
                    case 3:
                        item.textContent = "Cinghiale Dolce-Forte";
                        break;
                    case 4:
                        item.textContent = "Bistecca Alla Fiorentina";
                        break;
                
                    default: console.log("error with list items");
                        break;
                }
                
                unorderedList.appendChild(item);
            }
        } 
        createListItems();

        container.appendChild(heading);
        container.appendChild(unorderedList);

        _getMain().appendChild(container);

    } 


    const _createDolci = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "DOLCI";
        const unorderedList = document.createElement("ul");
        const createListItems = () => {
            for(let i = 0; i < 5; i++) {
                const item = document.createElement("li");

                switch (i) {
                    case 0:
                        item.textContent = "Tiramisu";
                        break;
                    case 1:
                        item.textContent = "Panna cotta";
                        break;
                    case 2:
                        item.textContent = "Gelato misto";
                        break;
                    case 3:
                        item.textContent = "Cannoli";
                        break;
                    case 4:
                        item.textContent = "Biscottini";
                        break;
                
                    default: console.log("error with list items");
                        break;
                }
                
                unorderedList.appendChild(item);
            }
        } 
        createListItems();

        container.appendChild(heading);
        container.appendChild(unorderedList);

        _getMain().appendChild(container);

    } 

    const _createDrinks = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "DRINKS";
        const unorderedList = document.createElement("ul");
        const createListItems = () => {
            for(let i = 0; i < 5; i++) {
                const item = document.createElement("li");

                switch (i) {
                    case 0:
                        item.textContent = "Espresso";
                        break;
                    case 1:
                        item.textContent = "Cappucino";
                        break;
                    case 2:
                        item.textContent = "Limonata";
                        break;
                    case 3:
                        item.textContent = "Negroni";
                        break;
                    case 4:
                        item.textContent = "Prosecco";
                        break;
                
                    default: console.log("error with list items");
                        break;
                }
                
                unorderedList.appendChild(item);
            }
        } 
        createListItems();

        container.appendChild(heading);
        container.appendChild(unorderedList);

        _getMain().appendChild(container);

    } 

    const load = () => {
        _createMain();
        _createAntipasti();
        _createPrimi();
        _createSecondi();
        _createDolci();
        _createDrinks();
    }
    

    return {load};



})();

export {menuPage};
// Appetizers
// Main dishes
// Drinks