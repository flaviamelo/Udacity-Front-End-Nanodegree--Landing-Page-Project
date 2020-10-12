//Navigation Global Variable
const myNav = document.getElementById('navbar__list');

//Section Global Variable
const mySection = document.querySelectorAll('section');

//Build Navbar
const buildNav = () => {

    let navUI = '';
    mySection.forEach(section => {

        const ID = section.id;
        const navData = section.dataset.nav

        navUI += `<li><a class= "menu__link" href="#${ID}">${navData}</a></li>`;

    });

    myNav.innerHTML = navUI;
};

buildNav();

//Slideshow

var myIndex = 0;
slideShow();

function slideShow() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slideShow, 2000); // Change image every 2 seconds
}
