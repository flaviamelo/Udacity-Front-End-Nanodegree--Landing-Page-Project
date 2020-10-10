/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navBarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
/**
 */

// build the nav






function myNavBar() {
  const navBar = document.querySelector("#navbar__list");
  const fragment = document.createDocumentFragment();

  link.forEach(myNav);
  function myNav(section) {
    const newNav = setLinks(section);
    newNav.addEventListener("click", function () {
      scrollToSection(section.sectionId);
    });
    fragment.appendChild(myNav);
  }
  navBar.appendChild(fragment);
}

function setLinks(section) {
  const navLinks = document.createElement("li");
  navLinks.setAttribute("id", section.menuId);
  if (links[0] === "Home") {
    newNav.textContent = "Home";
  } else {
    newNav.textContent = section.sectionId;
  }
  return newNav;
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  console.log(element.offsetTop);
  window.scrollTo({
    top: element.offsetTop,
    left: 0,
    behavior: "smooth",
  });
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
