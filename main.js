document.addEventListener("DOMContentLoaded",
  function(){
    const linkItem = document.querySelectorAll('.link-item');

    const currentPath = window.location.pathname.split('/').pop();

    linkItem.forEach(link => {
      if(link.getAttribute('href') === currentPath){
        link.classList.add('active');
      };
    });
  });

  // ========== SHOW MENU =============

  const navMenu = document.getElementById("nav-menu"),
        navToogle = document.getElementById("nav-toogle"),
        navClose = document.getElementById("nav-close");
// menu show
  if(navToogle){
    navToogle.addEventListener("click", function(){
      navMenu.classList.add("show-menu")
    })
  }

// menu hidden

if(navClose){
  navClose.addEventListener("click", function(){
    navMenu.classList.remove("show-menu")
  })
}


// ============   REMOVE MOBILE MENU ============

const navLink = document.querySelectorAll(".nav-link")

const linkAction = function(){
  const navMenu = document.getElementById("nav-menu")
  // when we click on each nav-link we remove the class show-menu
  navMenu.classList.remove("show-menu")
}
  navLink.forEach(n => n.addEventListener("click", linkAction))



// ============   ADD BLUR HEADER ============
const blurHeader = function() {
  const header = document.getElementById("header")
  // add a class if the bottom offset is greater than 50 of the viewport 

  this.scrollY >= 50 ? header.classList.add("blur-header")
                     : header.classList.remove("blur-header")
}
window.addEventListener("scroll", blurHeader)
