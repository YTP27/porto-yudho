// scripts/scripts.js
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Update current year
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Header shadow on scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 30 ? '0 2px 10px rgba(0,0,0,0.1)' : 'none';
  });

  // Toggle nav for mobile
  const iconNav = document.querySelector('.icon-nav');
  const nav = document.querySelector('nav');
  if (iconNav && nav) {
    iconNav.addEventListener('click', () => nav.classList.toggle('d-none'));
  }

  // Hero image grayscale toggle on hover
  const heroImage = document.querySelector('.face-img');
  const hero = document.getElementById('hero');
  if (hero && heroImage) {
    hero.addEventListener('mouseenter', () => {
      gsap.to(heroImage, { filter: "grayscale(0%)", duration: 0.4 });
    });
    hero.addEventListener('mouseleave', () => {
      gsap.to(heroImage, { filter: "grayscale(100%)", duration: 0.4 });
    });
  }

  // ==============================
  // GSAP HERO ENTRANCE ANIMATION
  // ==============================

  // Set initial state
  gsap.set(".face-img", { y: 60, opacity: 0 });
  gsap.set(".face-side.left .label", { x: -60, opacity: 0 });
  gsap.set(".face-side.right .label", { x: 60, opacity: 0 });

  // Animate in
  gsap.to(".face-img", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3
  });

  gsap.to(".face-side.left .label", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    delay: 0.6
  });

  gsap.to(".face-side.right .label", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    delay: 0.9
  });

  // Optional image float on hover
  if (heroImage) {
    heroImage.addEventListener('mouseenter', () => {
      gsap.to(heroImage, { y: -8, duration: 0.4, ease: "power1.out" });
    });

    heroImage.addEventListener('mouseleave', () => {
      gsap.to(heroImage, { y: 0, duration: 0.4, ease: "power1.out" });
    });
  }
});


