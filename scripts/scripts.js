document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Update year
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Header shadow
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 30 ? '0 2px 10px rgba(0,0,0,0.1)' : 'none';
  });

  // Toggle nav
  const iconNav = document.querySelector('.icon-nav');
  const nav = document.querySelector('nav');
  if (iconNav && nav) {
    iconNav.addEventListener('click', () => nav.classList.toggle('d-none'));
  }

  // Hover grayscale toggle
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

    // =============================
  // HEADER ENTRANCE ANIMATION
  // =============================
  gsap.set("#header", { y: -60, opacity: 0 });

  gsap.to("#header", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    delay: 0.2
  });


  // =============================
  // HERO SECTION ENTRANCE ANIMATION
  // =============================
  gsap.set(".face-img", { y: 60, opacity: 0 });
  gsap.set(".face-side.left .label", { x: -60, opacity: 0 });
  gsap.set(".face-side.right .label", { x: 60, opacity: 0 });

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

  // Float hero image on hover
  if (heroImage) {
    heroImage.addEventListener('mouseenter', () => {
      gsap.to(heroImage, { y: -8, duration: 0.4, ease: "power1.out" });
    });
    heroImage.addEventListener('mouseleave', () => {
      gsap.to(heroImage, { y: 0, duration: 0.4, ease: "power1.out" });
    });
  }

  // =============================
  // PROJECT SECTION SCROLL ANIMATION
  // =============================
  gsap.utils.toArray(".project-card").forEach((card, i) => {
    // Set kondisi awal, disembunyiin dulu
    gsap.set(card, { opacity: 0, y: 60 });

    // ScrollTrigger buat tiap card
    ScrollTrigger.create({
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
        onEnter: () => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                delay: i * 0.3, // Delay antar card, dari kiri ke kanan
                ease: "power3.out"
            });
        }
    });
});

  // =============================
  // PARALLAX IMAGE MOVEMENT (DESKTOP)
  // =============================
  if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) / 40;
      const moveY = (e.clientY - window.innerHeight / 2) / 40;

      gsap.to(".face-img", {
        x: moveX,
        y: moveY,
        duration: 0.6,
        ease: "power2.out"
      });
    });
  }
});

// Toggle nav (Mobile)
document.addEventListener('DOMContentLoaded', () => {
  const iconNav = document.querySelector('.icon-nav');
  const mobileMenu = document.getElementById('mobile-menu');

  iconNav.addEventListener('click', () => {
    mobileMenu.style.display = (mobileMenu.style.display === "flex") ? "none" : "flex";
  });

  // Tutup menu kalo klik salah satu link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.display = "none";
    });
  });
});

document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');

    // Filter: hanya link internal (bukan target _blank atau mailto/tel)
    if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Jalanin animasi keluar (contoh fade out body)
            gsap.to("body", {
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => {
                    window.location.href = href;
                }
            });
        });
    }
});





