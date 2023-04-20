const menuPage = (() => {

    const createMain = () => {
        const mainElement = document.createElement("main");
        mainElement.classList.add("menu");
        document.querySelector("#content").appendChild(mainElement);
    }

    const getMain = () => {
        return document.querySelector(".menu");
    }
    
    const createAppetizers = () => {
        const appetizerContainer = document.createElement("div");
        const appetizerHeading = document.createElement("h1");
        appetizerHeading.textContent = "Appetizers";
        const appetizerUnorderedList = document.createElement("ul");
        const createAppetizerListItems = () => {
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
                
                appetizerUnorderedList.appendChild(item);
            }
        } 
        createAppetizerListItems();

        appetizerContainer.appendChild(appetizerHeading);
        appetizerContainer.appendChild(appetizerUnorderedList);

        getMain().appendChild(appetizerContainer);

    }

    const load = () => {
        createMain();
        createAppetizers();
    }
    

    return {load};



})();

export {menuPage};
// Appetizers
// Main dishes
// Drinks
// 