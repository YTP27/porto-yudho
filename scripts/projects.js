document.addEventListener('DOMContentLoaded', () => {
  // Hero title dan description animasi on load
  gsap.from(".project-title", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".project-description", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from(".project-meta", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power3.out",
  });

  // Animasi section text dan visual saat scroll
  gsap.utils.toArray(".project-section-text, .project-section-visual").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // saat 20% dari viewport atas
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

  // Animasi swatch satu-satu di color palette
  gsap.utils.toArray(".color-palette-grid .color-swatch").forEach((swatch, i) => {
    gsap.from(swatch, {
      scrollTrigger: {
        trigger: swatch,
        start: "top 85%",
      },
      scale: 0,
      opacity: 0,
      duration: 0.5,
      delay: i * 0.1, // stagger efek
      ease: "back.out(1.7)",
    });
  });

  // Animasi gambar mockup satu-satu
  gsap.utils.toArray(".color-token-explanation-card img").forEach((img, i) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.15,
      ease: "power2.out",
    });
  });

  // Animasi tombol mobile menu
  const mobileMenuIcon = document.querySelector('.icon-nav');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (mobileMenuIcon && mobileMenu) {
    mobileMenuIcon.addEventListener('click', () => {
      const isOpen = mobileMenu.style.display === 'flex';
      if (isOpen) {
        gsap.to(mobileMenu, { height: 0, duration: 0.4, onComplete: () => mobileMenu.style.display = 'none' });
      } else {
        mobileMenu.style.display = 'flex';
        gsap.fromTo(mobileMenu, { height: 0 }, { height: 'auto', duration: 0.4 });
      }
    });
  }

  // Tahun copyright otomatis
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
});
