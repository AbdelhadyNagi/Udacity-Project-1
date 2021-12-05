// Define Global Variables
let navbarList = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");
// End Global Variables

// Start Main Functions

// build the nav
let fragment = document.createDocumentFragment();
for (let i = 0; i < sections.length; i++) {
  let listItem = document.createElement("li");
  let linkItem = document.createElement("a");
  fragment.appendChild(listItem);
  listItem.appendChild(linkItem);
  linkItem.classList.add("menu__link");
  linkItem.setAttribute("href", `#section${i + 1}`);
  let sectionLink = sections[i].getAttribute("data-nav");
  linkItem.textContent = sectionLink;
}
navbarList.appendChild(fragment);

// Add class 'active' to section when near top of viewport
let linkItems = document.querySelectorAll("#navbar__list a");
linkItems[0].classList.add("active");
onscroll = () => {
  const yOffset = window.pageYOffset;
  sections.forEach((section) => {
    if (
      yOffset >= section.offsetTop - section.offsetHeight / 2 &&
      yOffset <
        section.offsetTop + section.offsetHeight - section.offsetHeight / 2
    ) {
      let sectionId = section.getAttribute("id");
      removeActiveClasses();
      addActiveClass(sectionId);
    }
  });
};
let removeActiveClasses = () => {
  linkItems.forEach((a) => {
    a.classList.remove("active");
  });
};
let addActiveClass = (a) => {
  let linkId = `a[href="#${a}"]`;
  document.querySelector(linkId).classList.add("active");
};

// Scroll to anchor ID using scrollTO event
for (let i = 0; i < linkItems.length; i++) {
  let positionTop = sections[i].getBoundingClientRect().top;
  linkItems[i].addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: positionTop - 32,
      left: 0,
    });
  });
}

// End Main Functions
