  "use strict";

  /*================ Toggle icon Navbar ================*/
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  menuIcon.onclick = () => {
      navbar.classList.toggle('active');
      menuIcon.classList.toggle('bx-x');
  };

  // Close navbar when a nav link is clicked
  document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', () => {
          navbar.classList.remove('active');
          menuIcon.classList.remove('bx-x');
      });
  });

  /*================ Scroll Section Active Link ================*/
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
      sections.forEach(section => {
          let top = window.scrollY;
          let offset = section.offsetTop - 150;
          let height = section.offsetHeight;
          let id = section.getAttribute('id');

          if (top >= offset && top < offset + height) {
              navLinks.forEach(link => link.classList.remove('active'));
              let activeLink = document.querySelector(`header nav a[href*='${id}']`);
              if (activeLink) activeLink.classList.add('active');

              // Animate skills progress bars
              if (id === 'skills') {
                  const skillsSection = document.querySelector('.skills');
                  if (!skillsSection.classList.contains('animated')) {
                      const progressSpans = document.querySelectorAll('.progress-line span');
                      progressSpans.forEach(span => {
                          span.style.width = span.dataset.progress;
                      });
                      skillsSection.classList.add('animated');
                  }
              }
          }
      });

      /*================ Sticky Navbar ================*/
      let header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);
  };

  /*================ Scroll reveal ================*/
  const sr = ScrollReveal({
      reset: true,
      distance: '15px',
      duration: 2000,
      delay: 200
  });

  sr.reveal('.home-content, .heading', { origin: 'top' });
  sr.reveal('.home-img, .services-container, .project-box, .contact form, .skills-container', { origin: 'bottom' });
  sr.reveal('.home-content h1, .about-img', { origin: 'left' });
  sr.reveal('.home-content p, .about-content', { origin: 'right' });

  /*================ Services Cards ================*/
  const whatsappNumber = "918839246860"; 

  const services = [
    {
      icon: "bx bx-laptop",
      title: "Laptop Screen Replacement",
      description: "Cracked or malfunctioning screen? We replace laptop screens for all major brands.",
      message: "Hello, I would like to book a Laptop Screen Replacement service."
    },
    {
      icon: "bx bx-battery-full",
      title: "Mobile Phone Battery Replacement",
      description: "Is your phone battery draining too fast? We provide quick and reliable battery replacements.",
      message: "Hello, I need a Mobile Phone Battery Replacement service."
    },
    {
      icon: "bx bx-keyboard",
      title: "Laptop Keyboard Repair",
      description: "Spills, stuck keys, or unresponsive keyboard? Our experts can repair or replace it.",
      message: "Hello, I would like to repair my Laptop Keyboard."
    },
    {
      icon: "bx bx-image",
      title: "Data Recovery Services",
      description: "Lost important files? We offer data recovery services for hard drives and mobile devices.",
      message: "Hello, I need help with Data Recovery."
    },
    {
      icon: "bx bx-virus",
      title: "Virus & Malware Removal",
      description: "Slow performance or strange pop-ups? We can clean your system from viruses and malware.",
      message: "Hello, I want to book a Virus & Malware Removal service."
    },
    {
      icon: "bx bx-mobile",
      title: "Mobile Phone Screen Repair",
      description: "Dropped your phone? We can replace shattered or cracked screens on most smartphone models.",
      message: "Hello, I need Mobile Phone Screen Repair."
    }
  ];

  const container = document.getElementById("services-container");
  if (container) {
    services.forEach(service => {
      const card = document.createElement("div");
      card.classList.add("service-box");

      card.innerHTML = `
        <i class='${service.icon}'></i>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <a href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.message)}" 
           target="_blank" 
           class="btn read-more-btn">
           Book on WhatsApp
        </a>
      `;

      container.appendChild(card);
    });
  }