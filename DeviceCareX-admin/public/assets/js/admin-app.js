// ========== About Form ==========
const aboutForm = document.getElementById("about-form");
if (aboutForm) {
  aboutForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const aboutData = {
      history: document.getElementById("about-history").value.trim(),
      growth: document.getElementById("about-growth").value.trim(),
      today: document.getElementById("about-today").value.trim(),
      mission: document.getElementById("about-mission").value.trim(),
    };

    fetch("/save-about", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aboutData),
    })
      .then(res => res.json())
      .then(data => alert(data.message))
      .catch(err => console.error("Error:", err));
  });
}

// ========== Contact Form ==========
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const contactData = {
      whatsapp: document.getElementById("contact-whatsapp").value.trim(),
      phone: document.getElementById("contact-phone").value.trim(),
      email: document.getElementById("contact-email").value.trim(),
      maps: document.getElementById("contact-maps").value.trim(),
    };

    fetch("/save-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    })
      .then(res => res.json())
      .then(data => alert(data.message))
      .catch(err => console.error("Error:", err));
  });
}
