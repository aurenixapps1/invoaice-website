// ======================================================
// InvoAIce Website
// script.js
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------
  // Current Year
  // -----------------------------

  const year = document.querySelector(".current-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // -----------------------------
  // Smooth Scroll
  // -----------------------------

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // -----------------------------
  // Navbar Shadow
  // -----------------------------

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 20) {
      navbar.style.boxShadow = "0 10px 35px rgba(15,23,42,.08)";
      navbar.style.background = "rgba(255,255,255,.92)";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.background = "rgba(255,255,255,.72)";
    }
  });

  // -----------------------------
  // Scroll Reveal
  // -----------------------------

  const revealItems = document.querySelectorAll(
    ".feature-card, .highlight-card, .price-card, .faq-item, .workflow-card",
  );

  revealItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .7s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
    },
  );

  revealItems.forEach((item) => observer.observe(item));

  // -----------------------------
  // Active Navigation
  // -----------------------------

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < top + height) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // -----------------------------
  // Phone Floating Animation
  // -----------------------------

  const phone = document.querySelector(".hero-phone img");

  if (phone) {
    let direction = 1;

    setInterval(() => {
      phone.style.transform = `translateY(${direction * 10}px)`;

      direction *= -1;
    }, 2200);
  }

  // -----------------------------
  // Mouse Parallax
  // -----------------------------

  const glow = document.querySelector(".phone-glow");

  document.addEventListener("mousemove", (e) => {
    if (!glow) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;

    glow.style.transform = `translate(${x}px, ${y}px)`;
  });

  // -----------------------------
  // Screenshot Hover
  // -----------------------------

  document.querySelectorAll(".phone-card img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.zIndex = "5";
    });

    img.addEventListener("mouseleave", () => {
      img.style.zIndex = "1";
    });
  });
});
