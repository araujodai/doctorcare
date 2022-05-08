/*alert('Olá mundo!')*/
window.addEventListener('scroll', onScroll)
// se houver erro de não carregar o onScroll basta executar uma ver ao abrir o documento
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo no meio da viewport
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?

  //topo da seção
  const sectionTop = section.offsetTop

  //altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou passou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  console.log(
    'o topo passou ou chegou a linha?',
    sectionTopReachOrPassedTargetLine
  )

  //verificar se a base está abaixo da linha
  //quais dados vou precisar?
  // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight
  // o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  console.log('O final da seão passou da linha?', sectionEndPassedTargetLine)

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
function openMenu() {
  let body = document.querySelector('body')
  /*posso substituir por document.body.classLis.add()*/
  body.classList.add('menu-expanded')
}
function closeMenu() {
  let body =
    document.querySelector(
      'body'
    ) /*posso substituir por document.body.classList.remove()*/
  body.classList.remove('menu-expanded')
}
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
 #home, 
 #home img,
 #home .header-container,
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content,
 #about .content img`)
