const toggleNav = () => {
  // Toggle the 'nav--open' class on the '.nav-bar' class
  navBar.classList.toggle('nav--open')
  console.log('menuImage click')
}


// Step 1: Create a reference to the '.nav-bar' class

const navBar = document.querySelector('.nav-bar');

console.log('navBar', navBar);

// Step 1.a: Create a reference to the menu image

const menuImage = document.querySelector('.menu-button');

console.log('menuImage', menuImage)


// Step 2: Create a reference to the '.nav-link' class

const navLinks = document.querySelectorAll('.nav-link');

console.log('navLinks', navLinks);

// Using the NavBar reference, add a click handler that calls toggleNav

menuImage.addEventListener('click', toggleNav);

