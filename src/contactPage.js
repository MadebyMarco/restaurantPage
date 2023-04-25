import phoneIconPng from "./Icons/phoneIcon.png";
import emailIconPng from "./Icons/emailIcon.png";


console.log("test");

const contactPage = (() => {
    const createMain = () => {
        const mainElement = document.createElement("main");
        return mainElement
    }

    const createContact = () => {
        const container = document.createElement("div");

        const header = document.createElement("h1");
        header.textContent = "Contact";
        container.appendChild(header);

        const numberContact = document.createElement("div");
        numberContact.classList.add("iconAndInfo");
        const number = document.createElement("div");
        const phoneIcon = document.createElement("img");
        phoneIcon.setAttribute("src", phoneIconPng);
        phoneIcon.classList.add("icon");
        number.textContent = "+39339957495";

        numberContact.appendChild(phoneIcon);
        numberContact.appendChild(number);
        container.appendChild(numberContact);

        const emailContact = document.createElement("div");
        emailContact.classList.add("iconAndInfo");

        const email = document.createElement("div")
        email.textContent = "fakeItalianEmail@gitaly.com"
        const emailIcon = document.createElement("img")
        emailIcon.setAttribute("src", emailIconPng);
        emailIcon.classList.add("icon");

        emailContact.appendChild(emailIcon);
        emailContact.appendChild(email);
        container.appendChild(emailContact);

        return container;

    }

    const load = () => {
        const container = document.querySelector("#content");
        container.appendChild(createMain());
        const main = document.querySelector("main");
        main.appendChild(createContact());
    }

    return {load};
})();

export {contactPage}