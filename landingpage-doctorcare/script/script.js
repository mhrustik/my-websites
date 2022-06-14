window.addEventListener("scroll", onScroll)

function onScroll() {
  toFixNavbarOnScroll()
  backToTopButton()
  activeNavCurrentSection(home)
  activeNavCurrentSection(services)
  activeNavCurrentSection(about)
  activeNavCurrentSection(contact)
}

function activeNavCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = targetLine <= sectionEndsAt

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && sectionEndPassedTargetLine

  const sectionId = section.getAttribute("id")
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove("active")
  if (sectionBoundaries) {
    menuElement.classList.add("active")
  }
}

function toFixNavbarOnScroll() {
  const nav = document.querySelector("nav")
  if (scrollY > 0) {
    nav.classList.add("scroll")
  } else {
    nav.classList.remove("scroll")
  }
}

function backToTopButton() {
  if (scrollY > 1460) {
    document.querySelector("#backToTop").classList.add("show")
  } else {
    document.querySelector("#backToTop").classList.remove("show")
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded")
}

function closeMenu() {
  document.body.classList.remove("menu-expanded")
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: "700",
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services header,
  #services .card,
  #about header,
  #about .content,
  #about .content img,
  #contact header,
  #contact .content,
  #contact .content img
`)
