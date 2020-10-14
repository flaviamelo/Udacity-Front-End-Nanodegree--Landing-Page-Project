
//Navigation Global Variable
const myNav = document.getElementById('navbar__list');

//Section Global Variable
const mySections = document.querySelectorAll('section');


//Build Navbar
function buildNav() {
  const fragment = document.createDocumentFragment();

  mySections.forEach((mySection) => {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.innerText = mySection.getAttribute('data-nav');
      a.setAttribute('class', 'menu__link');
      
      // scroll to anchor ID using scroll to event
      a.addEventListener("click", () => {
          mySection.scrollIntoView({block: 'end', behavior: "smooth"});
          });
      li.appendChild(a);
      fragment.appendChild(li);
  });
  myNav.appendChild(fragment);
};
buildNav();


/*//Active Page Link Button Highlight
$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
  })
})*/


// Active States
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};
const clearActive = (section) => {
  section.classList.remove('your-active-class');
  section.classList.remove('focus');
};
const insertActive = (conditional, section) => {
  if (conditional) {
      section.classList.add('your-active-class');
      section.classList.add('focus'); 
  };
};
const activeSection = () => {
  mySections.forEach(section => {
      const elementOffset = offset(section);

      inviewport = () => elementOffset < 180 && elementOffset >= -180;

      clearActive(section);
      insertActive(inviewport(), section);

      $(document).ready(function(section){
        $('ul li a').click(function(){
          $('li a').removeClass("active");
          $(this).addClass("active");
        })
      })

  });
};
window.addEventListener('scroll', activeSection);


//Slideshow
let myIndex = 0;
slideShow();

function slideShow() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slideShow, 2000); // Change image every 2 seconds
}


//Top Button
const goTop = document.getElementById("topButton");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





