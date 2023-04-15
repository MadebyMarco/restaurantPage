function createAndAppendContentDiv() {
    const content = document.createElement("div");
    const body = document.querySelector("body");
    content.id = "content";
    body.appendChild(content);
}


function createNavBar() {
    const navBar = document.createElement("div");
    navBar.classList.add("nav");
    
    const navButtonHome = document.createElement("button");
    navButtonHome.textContent = "Home";
    
    const navButtonMenu = document.createElement("button");
    navButtonMenu.textContent = "Menu";
    
    const navButtonLocations = document.createElement("button");
    navButtonLocations.textContent = "Contact";
    
    navBar.appendChild(navButtonHome);
    navBar.appendChild(navButtonMenu);
    navBar.appendChild(navButtonLocations);
    
    document.body.appendChild(navBar);
}

createNavBar();
createAndAppendContentDiv();


// Html skeleton
//   <body style="height: 100%">
//     <div class="heading">Title</div>
//     <div>Nav bar
//         <button >Home</button>
//         <button>Locations</button>
//         <button>Menu</button>
//     </div>
//     <main>
//         <div class="heroImage">Img goes here</div>
//         <div class="about">About</div>
//         <div class="hours">Hours</div>
//         <div class="location">Location</div>
//     </main>
//   </body>