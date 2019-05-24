const toggleNav = () => {
  // Toggle the 'nav--open' class on the '.nav-bar' class
  navBar.classList.toggle('nav--open')
  console.log('hamburger click')
}

// Step 1: Create a reference to the '.nav-bar' class

const navBar = document.querySelector('.nav-bar');

console.log('navBar', navBar);

// Step 1.a: Create a reference to the menu image

var hamburger = document.querySelector(".hamburger");
console.log('hamburger', hamburger);


// Step 2: Create a reference to the '.nav-link' class

const navLinks = document.querySelectorAll('.nav-link');

console.log('navLinks', navLinks);

  // Add event listener to hamburger looking for a mouse click

  hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('is-active');
      toggleNav();
  });

  

