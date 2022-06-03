window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  //activateMenuAtCurrentSection(services)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a ação passou da linha
  // quais dados vou precisar

  //topo da seção
  const sectionTop = section.offsetTop

  //altura da seção
  const sectionHeight = section.offsetHeight

  //o topo da seção chegou ou ultrapassou a linha alto
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // informações dos dados e da lógica
  console.log(
    'O topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetLine
  )

  // Verificar se a base está abaixo da linha alvo
  // Quais dados vou precisar?

  // A secão termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // O final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  // Limites da seção

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  // Mecanismo de procura por elemento dentro do menu, que tenha a, com um atributo id home.

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  const navigationElement = document.getElementById('navigation') //função nativa Getelement//
  navigationElement.classList.remove('scroll')
  if (scrollY > 0) {
    navigationElement.classList.add('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  const backToTopButtonElement = document.getElementById('backToTopButton')
  if (scrollY > 600) {
    backToTopButtonElement.classList.add('show')
  } else {
    backToTopButtonElement.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'left',
  distance: '70px',
  duration: 1600
}).reveal(`
    #home,
     
      #home .stats,
       
       #services .card:nth-child(1),
       #services .card:nth-child(3),
       #services .card:nth-child(5),
       #about header`)

ScrollReveal({
  origin: 'rigth',
  distance: '70px',
  duration: 1600
}).reveal(`
          
           #home img,
           #services .card:nth-child(2),
           #services .card:nth-child(4),
           #services .card:nth-child(6),
             #services, #services header,
             #about,
             #about .content,
             #about img`)

ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1800
}).reveal(`
          #contact,
          footer`)
