// FINAL CLEAN JS FIX - ABOUT PAGE GSAP ANIMASI STABIL MOBILE/PC

document.addEventListener('DOMContentLoaded', function () {
    if (!window.location.pathname.endsWith('about.html')) return;

    gsap.registerPlugin(ScrollTrigger);

    const mySkillsData = [
        { name: "UI/UX Design", percentage: 95, colorClass: "skill-blue" },
        { name: "Front-end Development", percentage: 90, colorClass: "skill-green" },
        { name: "QA Automation", percentage: 95, colorClass: "skill-yellow" },
        { name: "Prototyping & Wireframing", percentage: 75, colorClass: "skill-orange" },
        { name: "Problem Solving", percentage: 85, colorClass: "skill-purple" },
        { name: "Visual Storytelling", percentage: 80, colorClass: "skill-red" }
    ];

    function renderMySkills() {
        const skillsContainer = document.querySelector('.skills-grid');
        if (!skillsContainer) return;

        skillsContainer.innerHTML = '';

        mySkillsData.forEach(skill => {
            skillsContainer.innerHTML += `
                <div class="col-12 col-md-6 col-lg-4 skill-item">
                    <span class="skill-name">${skill.name}</span>
                    <div class="skill-bar-container">
                        <div class="skill-bar ${skill.colorClass}" data-skill-level="${skill.percentage}"></div>
                    </div>
                    <span class="skill-percentage">0%</span>
                </div>
            `;
        });

        gsap.utils.toArray(".skill-item").forEach(skillItem => {
            const skillBar = skillItem.querySelector(".skill-bar");
            const skillPercent = skillItem.querySelector(".skill-percentage");
            const level = parseFloat(skillBar.dataset.skillLevel) || 0;
            const isMobile = window.innerWidth <= 991.98;

            gsap.set(skillBar, isMobile ? { width: 0 } : { height: 0 });

            gsap.to(skillBar, {
                [isMobile ? "width" : "height"]: `${level}%`,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: skillItem,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    once: true
                }
            });

            gsap.to({ val: 0 }, {
                val: level,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: skillItem,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    once: true
                },
                onUpdate() {
                    skillPercent.textContent = `${Math.round(this.targets()[0].val)}%`;
                }
            });
        });
    }

    function pieChartAnimation() {
        const pieChart = document.querySelector('.pie-chart');
        if (!pieChart) return;

        const designerPercent = 60;
        const coderPercent = 40;

        gsap.set(pieChart, { background: "conic-gradient(#333 0deg 0deg, #fff 0deg 0deg)" });

        gsap.to(pieChart, {
            background: `conic-gradient(#333 0deg ${designerPercent * 3.6}deg, #fff ${designerPercent * 3.6}deg 360deg)` ,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".pie-chart-container",
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            }
        });
    }

    function randomFactsAnimation() {
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
    }

    function headerAnimation() {
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
            ease: "power2.out",
            delay: 0.2
        });
    }

    function aboutAnimation() {
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
    }

    function contactAnimation() {
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
    }

    function globalLinkExit() {
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href');
            if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
                link.addEventListener('click', e => {
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
    }

    function allAnimations() {
        renderMySkills();
        pieChartAnimation();
        randomFactsAnimation();
        headerAnimation();
        aboutAnimation();
        contactAnimation();
        globalLinkExit();
    }

    allAnimations();

    window.addEventListener('resize', () => {
        clearTimeout(window.__resizeTimer);
        window.__resizeTimer = setTimeout(() => {
            ScrollTrigger.getAll().forEach(t => t.kill());
            allAnimations();
            ScrollTrigger.refresh();
        }, 250);
    });

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            ScrollTrigger.refresh();
        }
    });

    window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        if (window.scrollY > 50) header.classList.add("header-scrolled");
        else header.classList.remove("header-scrolled");
    });
});
