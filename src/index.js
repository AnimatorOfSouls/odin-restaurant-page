"use strict";

import "./style.css"

function changeTab(page) {
  const container = document.querySelector(".container");
  container.removeChild(document.querySelector(".page"));
  makePages(page);
} 

function makeNavBar() {
  const container = document.querySelector(".container");

  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");

  const navLinks = document.createElement("nav");

  let navButtons = [];
  const homeLink = document.createElement("button")
  homeLink.classList.add("selected");
  homeLink.setAttribute("page", "home");
  homeLink.innerText = "Home";
  navButtons.push(homeLink);

  const menuLink = document.createElement("button")
  menuLink.setAttribute("page", "menu");
  menuLink.innerText = "Menu";
  navButtons.push(menuLink);

  const aboutLink = document.createElement("button")
  aboutLink.setAttribute("page", "about");
  aboutLink.innerText = "About Us";
  navButtons.push(aboutLink);

  for (let button of navButtons) {
    button.addEventListener("click", (e) => {
      document.querySelector(".selected").classList.remove("selected");
      e.target.classList.add("selected");
      changeTab(e.target.getAttribute("page"));
    });
    navLinks.appendChild(button);
  }

  navBar.appendChild(navLinks);
  container.appendChild(navBar);
}

function makeFooter() {
  const container = document.querySelector(".container");
  
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const text = document.createElement("p");
  text.innerText = "Made with ♥ by AnimatorOfSouls"
  footer.appendChild(text);

  container.appendChild(footer);
}

function makeHome() {
  const container = document.querySelector(".container");

  const home = document.createElement("div");
  home.classList.add("page");
  home.classList.add("home");

  const filter = document.createElement("div");
  filter.classList.add("filter");

  const content = document.createElement("div");
  content.classList.add("content");

  const header = document.createElement("h1");
  header.classList.add("header");
  header.innerText = "Miner's Eatery";
  content.appendChild(header);

  const description = document.createElement("p");
  description.classList.add("description");
  description.innerText = "The premier restaurant within the Minecraft community"
  content.appendChild(description);

  filter.appendChild(content);
  home.appendChild(filter);
  container.appendChild(home);
}

function makeMenu() {
  const container = document.querySelector(".container");

  const menu = document.createElement("div");
  menu.classList.add("page");
  menu.classList.add("menu");

  const filter = document.createElement("div");
  filter.classList.add("filter");

  const content = document.createElement("div");
  content.classList.add("content");

  const header = document.createElement("h1");
  header.classList.add("header");
  header.innerText = "Menu";
  content.appendChild(header);

  const foodsList = {
    "Starters": [
      ["Beetroot Soup", "A refreshing beetroot soup"],
      ["Salmon Sashimi", "Salmon from the frozen ocean, cut into thin slices"],
    ],
    "Main Course": [
      ["Golden Carrot", "Sweet and crunchy carrots coated with 24 carat gold"],["Baked Potato", "Fluffy baked potato dripped in silky cheese with grated golden apple dusted over the top"],
      ["Rabbit Stew", "A hearty stew with delicate rabbit meat"],
    ],
    "Dessert": [
      ["Fruit Medley", "A salad of sweet berries, apple chunks, and melon balls"],
      ["Chocolate Chip Cookies", "Cookies made with cocoa freshly harvested off the tree"],
      ["Chorus Kebab", "Three chorus fruits threaded on a skewer. Warning: May cause mild teleportation."],
    ]
  };

  for (let [category, foods] of Object.entries(foodsList)) {
    let section = document.createElement("div");
    section.classList.add("category");

    const header = document.createElement("h2");
    header.classList.add("category-name");
    header.innerText = category;
    section.appendChild(header);

    for (let food of foods) {
      const foodCard = document.createElement("div");
      foodCard.classList.add("food-card");

      const name = document.createElement("p");
      name.classList.add("food-name");
      name.innerText = food[0];
      foodCard.appendChild(name);
      const description = document.createElement("p");
      description.classList.add("food-description");
      description.innerText = food[1];
      foodCard.appendChild(description);

      section.appendChild(foodCard);
    }

    content.appendChild(section);
  }

  filter.appendChild(content);
  menu.appendChild(filter);
  container.appendChild(menu);
}

function makeAbout() {
  const container = document.querySelector(".container");

  const about = document.createElement("div");
  about.classList.add("page");
  about.classList.add("about");

  const filter = document.createElement("div");
  filter.classList.add("filter");

  const content = document.createElement("div");
  content.classList.add("content");

  const header = document.createElement("h1");
  header.classList.add("header");
  header.innerText = "About Us";
  content.appendChild(header);

  const links = document.createElement("div");
  links.classList.add("links");

  let link = document.createElement("a");
  link.classList.add("link");
  link.href = "https://www.minecraft.net/en-us";
  link.innerText = "Join Us";
  links.appendChild(link);
  link = document.createElement("a");
  link.classList.add("link");
  link.href = "https://minecraft.fandom.com/wiki/Food";
  link.innerText = "Our ingredients";
  links.appendChild(link);

  content.appendChild(links);

  filter.appendChild(content);
  about.appendChild(filter);
  container.appendChild(about);
}

function makePages(pageName) {
  switch (pageName) {
    case "home":
      makeHome();
      break;
    case "menu":
      makeMenu();
      break;
    case "about":
      makeAbout();
      break;
  }
}

function makePage() {
  makeNavBar();
  makeFooter();
  makeHome();
}

makePage();