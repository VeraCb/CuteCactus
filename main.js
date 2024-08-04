

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

// ================== SHOW SCROLL UP =================
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up")
  // when the scroll is higher than 350 viewport height, add show-scroll class tot the "a" tag with the scrollup class

  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                        : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)


// ================== SCROLL SECTIONS ACTIVE LINK =================

const sections = document.querySelectorAll("section[id]")

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)