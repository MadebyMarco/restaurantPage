const menuPage = (() => {

    const createMain = () => {
        const mainElement = document.createElement("main");
        mainElement.classList.add("menu");
        document.querySelector("#content").appendChild(mainElement);
    }

    const getMain = () => {
        return document.querySelector(".menu");
    }
    
    const createAntipasti = () => {
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

        getMain().appendChild(container);

    }



     const createPrimi = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "PRIMI";
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

        getMain().appendChild(container);

    }

    const createSecondi = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "SECONDI";
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

        getMain().appendChild(container);

    } 


    const createDolci = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "DOLCI";
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

        getMain().appendChild(container);

    } 
    const load = () => {
        createMain();
        createAntipasti();
    }
    

    return {load};



})();

export {menuPage};
// Appetizers
// Main dishes
// Drinks
// 