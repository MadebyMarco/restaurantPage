import myPage from "./initialPageLoading";

myPage.loadDefault();

function clearContent() {
    const contents = document.querySelectorAll("#content > *");
    contents.forEach(element => element.remove());
}

export {clearContent};