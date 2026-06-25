// ==========================================
// InvoAIce Website
// Aurenix Apps
// ==========================================

// Fade-in animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document
  .querySelectorAll("section, .card, .gallery img, footer")
  .forEach((element) => {
    element.classList.add("fade");
    observer.observe(element);
  });

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Active Navigation Link
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Floating Gradient Animation
const gradients = document.querySelectorAll(".gradient");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  gradients.forEach((gradient, index) => {
    const moveX = (x - 0.5) * (20 + index * 10);
    const moveY = (y - 0.5) * (20 + index * 10);

    gradient.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

// Navbar Shadow on Scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 12px 40px rgba(0,0,0,.35)";
    nav.style.background = "rgba(12,12,16,.75)";
  } else {
    nav.style.boxShadow = "none";
    nav.style.background = "rgba(20,20,25,.55)";
  }
});

// Hero Image Tilt Effect
const heroImage = document.querySelector(".hero-right img");

if (heroImage) {
  heroImage.addEventListener("mousemove", (e) => {
    const rect = heroImage.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (0.5 - y / rect.height) * 12;

    heroImage.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;
  });

  heroImage.addEventListener("mouseleave", () => {
    heroImage.style.transform = "";
  });
}

// Gallery Hover Animation
document.querySelectorAll(".gallery img").forEach((image) => {
  image.addEventListener("mouseenter", () => {
    image.style.transition = ".35s";
  });
});

// Current Year
const year = document.querySelector(".current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Console
console.log("🚀 InvoAIce Website Loaded");
