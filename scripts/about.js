// Revisi Clean + Stabil untuk About Page

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.endsWith("about.html")) {
    gsap.registerPlugin(ScrollTrigger);

    // Config auto-refresh trigger
    ScrollTrigger.config({
      autoRefreshEvents: "DOMContentLoaded, load, resize"
    });

    // Skill Data
    const mySkillsData = [
      { name: "UI/UX Design", percentage: 95, colorClass: "skill-blue" },
      { name: "Front-end Development", percentage: 90, colorClass: "skill-green" },
      { name: "QA Automation", percentage: 95, colorClass: "skill-yellow" },
      { name: "Prototyping & Wireframing", percentage: 75, colorClass: "skill-orange" },
      { name: "Problem Solving", percentage: 85, colorClass: "skill-purple" },
      { name: "Visual Storytelling", percentage: 80, colorClass: "skill-red" }
    ];

    function renderMySkills(skills) {
      const container = document.querySelector(".skills-grid");
      if (!container) return;
      container.innerHTML = "";

      skills.forEach(skill => {
        container.insertAdjacentHTML("beforeend", `
          <div class="col-12 col-md-6 col-lg-4 skill-item">
            <span class="skill-name">${skill.name}</span>
            <div class="skill-bar-container">
              <div class="skill-bar ${skill.colorClass}" data-skill-level="${skill.percentage}"></div>
            </div>
            <span class="skill-percentage">0%</span>
          </div>
        `);
      });

      gsap.utils.toArray(".skill-item").forEach(item => {
        const bar = item.querySelector(".skill-bar");
        const percent = item.querySelector(".skill-percentage");
        const level = parseFloat(bar.dataset.skillLevel) || 0;
        const isMobile = window.innerWidth <= 991.98;

        gsap.set(bar, isMobile ? { width: "0%" } : { height: "0%" });

        gsap.to(bar, {
          [isMobile ? "width" : "height"]: `${level}%`,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
          }
        });

        gsap.to({ value: 0 }, {
          value: level,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
          },
          onUpdate: function () {
            percent.innerText = `${Math.round(this.targets()[0].value)}%`;
          }
        });
      });
    }

    renderMySkills(mySkillsData);

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        renderMySkills(mySkillsData);
        ScrollTrigger.refresh();
      }, 250);
    });

    // Pie Chart Animasi Stabil
    const pieChart = document.querySelector(".pie-chart");
    if (pieChart) {
      gsap.set(pieChart, { background: "conic-gradient(#333 0deg 0deg, #fff 0deg 360deg)" });

      ScrollTrigger.create({
        trigger: pieChart,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(pieChart, {
            background: "conic-gradient(#333 0deg 216deg, #fff 216deg 360deg)",
            duration: 2,
            ease: "power2.out"
          });
        }
      });
    }

    // Random Facts Animasi
    gsap.from("#random-facts .yoda-img, #random-facts .random-list li", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#random-facts",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Header Scroll Style
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      header.classList.toggle("header-scrolled", window.scrollY > 50);
    });

    // Header Masuk Animasi
    gsap.from("#header", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from("#logo img, .icon-nav", {
      opacity: 0,
      y: -30,
      duration: 1,
      delay: 0.2,
      ease: "power2.out"
    });

    // About Section
    gsap.from("#about-page .lead, #about-page p", {
      opacity: 0,
      x: -100,
      duration: 1.5,
      stagger: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about-page",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    gsap.from("#about-page .my-profile-img", {
      opacity: 0,
      scale: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about-page",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // Contact Section
    gsap.from("#contact h2", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    gsap.from("#contact a", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // Exit Page Animasi
    document.querySelectorAll("a[href]").forEach(link => {
      const href = link.getAttribute("href");
      if (!href.startsWith("http") && !href.startsWith("#") && !href.startsWith("mailto")) {
        link.addEventListener("click", e => {
          e.preventDefault();
          gsap.to("body", {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => window.location.href = href
          });
        });
      }
    });

    // Paksa Refresh Trigger Pas Load
    window.addEventListener("load", () => {
      setTimeout(() => ScrollTrigger.refresh(), 300);
    });
  }
});