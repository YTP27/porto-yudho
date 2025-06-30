document.addEventListener('DOMContentLoaded', () => {
    if (!window.location.pathname.endsWith('about.html')) return;

    gsap.registerPlugin(ScrollTrigger);

    // DATA SKILL
    const mySkillsData = [
        { name: "UI/UX Design", percentage: 95, colorClass: "skill-blue" },
        { name: "Front-end Development", percentage: 90, colorClass: "skill-green" },
        { name: "QA Automation", percentage: 95, colorClass: "skill-yellow" },
        { name: "Prototyping & Wireframing", percentage: 75, colorClass: "skill-orange" },
        { name: "Problem Solving", percentage: 85, colorClass: "skill-purple" },
        { name: "Visual Storytelling", percentage: 80, colorClass: "skill-red" }
    ];

    // RENDER SKILL
    function renderMySkills() {
        const container = document.querySelector('.skills-grid');
        if (!container) return;

        container.innerHTML = '';

        mySkillsData.forEach(skill => {
            container.innerHTML += `
                <div class="col-12 col-md-6 col-lg-4 skill-item">
                    <span class="skill-name">${skill.name}</span>
                    <div class="skill-bar-container">
                        <div class="skill-bar ${skill.colorClass}" data-skill-level="${skill.percentage}"></div>
                    </div>
                    <span class="skill-percentage">0%</span>
                </div>
            `;
        });

        // CLEAR ScrollTrigger lama biar ga duplikat
        ScrollTrigger.getAll().forEach(t => t.kill());

        gsap.utils.toArray(".skill-item").forEach(item => {
            const bar = item.querySelector(".skill-bar");
            const percentText = item.querySelector(".skill-percentage");
            const skillLevel = parseFloat(bar.dataset.skillLevel) || 0;
            const isMobile = window.innerWidth <= 991.98;

            gsap.set(bar, isMobile ? { width: "0%" } : { height: "0%" });

            gsap.to(bar, {
                [isMobile ? "width" : "height"]: skillLevel + "%",
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    once: true
                }
            });

            gsap.to({ val: 0 }, {
                val: skillLevel,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    once: true
                },
                onUpdate() {
                    percentText.innerText = Math.round(this.targets()[0].val) + "%";
                }
            });
        });
    }

    renderMySkills();

    // DEBOUNCE Resize biar ga spam retrigger
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            renderMySkills();
            ScrollTrigger.refresh();
        }, 300);
    });

    // PIE CHART
    const pieChart = document.querySelector('.pie-chart');
    if (pieChart) {
        const designer = 60;
        const coder = 40;

        gsap.set(pieChart, { background: "conic-gradient(#333 0deg 0deg, #fff 0deg 0deg)" });

        gsap.to(pieChart, {
            background: `conic-gradient(#333 0deg ${designer * 3.6}deg, #fff ${designer * 3.6}deg 360deg)`,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: pieChart,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            }
        });
    }

    // ANIMASI RANDOM FACTS
    gsap.from("#random-facts .yoda-img, #random-facts .random-list li", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#random-facts",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        }
    });

    // NAVBAR SCROLL BG
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        header.classList.toggle("header-scrolled", window.scrollY > 50);
    });

    // HEADER ANIMASI MASUK
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
        delay: 0.3,
        ease: "power2.out"
    });

    // ABOUT ANIMASI
    gsap.from("#about-page .lead, #about-page p", {
        opacity: 0,
        x: -80,
        duration: 1,
        stagger: 0.4,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#about-page",
            start: "top 85%",
            once: true
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
            once: true
        }
    });

    // CONTACT ANIMASI
    gsap.from("#contact h2", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 85%",
            once: true
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
            once: true
        }
    });

    // ANIMASI EXIT PAGE LINK
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
            link.addEventListener('click', e => {
                e.preventDefault();
                gsap.to("body", {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => window.location.href = href
                });
            });
        }
    });
});
