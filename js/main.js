// main.js
document.addEventListener('DOMContentLoaded', ()=> {
  // set current year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // nav toggle for mobile
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    mainNav.classList.toggle('open');
  });

  // simple form validation example (if you have a contact form)
  const contactForm = document.querySelector('form#contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (e) => {
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      if(!name || !/\S+@\S+\.\S+/.test(email)){
        e.preventDefault();
        alert('Please enter a valid name and email.');
      }
    });
  }

  // simple scroll animation using IntersectionObserver
  const observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, {threshold: 0.15});
  document.querySelectorAll('.card, .hero, .container section').forEach(el => observer.observe(el));
});
