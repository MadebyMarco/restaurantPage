const menuPage = (() => {

    const createMain = () => {
        const mainElement = document.createElement("main");
        mainElement.classList.add = "menu";
        document.querySelector("#content").appendChild(mainElement);
    }
    
    

    return {createMain};



})();

export {menuPage};
// Appetizers
// Main dishes
// Drinks
// 