// Mostrar y ocultar el menu

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//cierra el menú  cuando se hace clic en cualquiera de los links

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*sombra header*/
const shadowHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);

/* email*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm('service_n158azb','template_f808n7c','#contact-form','fjCJoZsxrswEtLF1Y')
  .then(() => {
    contactMessage.textContent = 'Message sent successfully'

    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)

    contactForm.reset();
  }, () => {
    contactMessage.textContent = 'Message not sent (service error)'
  })
}

contactForm.addEventListener('submit', sendEmail)