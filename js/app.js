
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
      
      //Scroll to Sections
      a.addEventListener("click", () => {
          mySection.scrollIntoView({block: 'end', behavior: "smooth"});
          });
      li.appendChild(a);
      fragment.appendChild(li);
  });
  myNav.appendChild(fragment);
};

function getVisibleSectionIndex() {
  let minor = window.innerHeight;
  visibleSectionIndex = -1;

  mySections.forEach((mySection, index) => {
      let offset = mySection.getBoundingClientRect();
      if(Math.abs(offset.top) < minor){
          minor = Math.abs(offset.top);
          visibleSectionIndex = index;
      }
  });
  return visibleSectionIndex;
}

function setActiveSection(){
  visibleSectionIndex = getVisibleSectionIndex();

  // If visibleSection exists
  if(visibleSectionIndex != -1){
      //List of a(tag)
      let navATagList = document.querySelectorAll('.menu__link');
      for (let i = 0; i < mySections.length; i++) {
          // Active State
          if (i == visibleSectionIndex){
              mySections[i].classList.add('your-active-class');
              navATagList[i].classList.add('your-active-class');
          }
          else{
              mySections[i].classList.remove('your-active-class');
              navATagList[i].classList.remove('your-active-class');
          }
      }; 
  };
}


buildNav();

document.addEventListener('scroll', setActiveSection);


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




