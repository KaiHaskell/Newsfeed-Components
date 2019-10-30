/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function navMenu(array) {
  //creating the new elements
  const menuDiv = document.createElement("div");
  const menuUl = document.createElement("ul");
  const menuButton = document.querySelector(".menu-button");

  array.forEach(items => {
    const menuLi = document.createElement("li");
    menuLi.textContent = items;
    menuUl.appendChild(menuLi);
  });

  //appending the elements
  menuDiv.appendChild(menuUl);

  //menu class
  menuDiv.classList.add("menu");

  //adding the event listener
  menuButton.addEventListener("click", () => {
    menuDiv.classList.toggle("menu--open");
  });

  return menuDiv;
}

let menu1 = navMenu(menuItems);

let header = document.querySelector(".header");
header.appendChild(navMenu(menuItems));
