document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('about.html')) {
        gsap.registerPlugin(ScrollTrigger);

        const mySkillsData = [
            { name: "UI/UX Design", percentage: 95, colorClass: "skill-blue" },
            { name: "Front-end Development", percentage: 90, colorClass: "skill-green" },
            { name: "QA Automation", percentage: 95, colorClass: "skill-yellow" },
            { name: "Prototyping & Wireframing", percentage: 75, colorClass: "skill-orange" },
            { name: "Problem Solving", percentage: 85, colorClass: "skill-purple" },
            { name: "Visual Storytelling", percentage: 80, colorClass: "skill-red" }
        ];

        function renderMySkills(skills) {
            const skillsContainer = document.querySelector('.skills-grid');
            if (!skillsContainer) return;

            skillsContainer.innerHTML = '';

            skills.forEach(skill => {
                const skillItem = document.createElement('div');
                skillItem.classList.add('skill-item');

                const skillName = document.createElement('div');
                skillName.classList.add('skill-name');
                skillName.textContent = skill.name;

                const skillBarContainer = document.createElement('div');
                skillBarContainer.classList.add('skill-bar-container');

                const skillBar = document.createElement('div');
                skillBar.classList.add('skill-bar', skill.colorClass);
                skillBar.dataset.skillLevel = skill.percentage;

                skillBarContainer.appendChild(skillBar);

                const skillPercentage = document.createElement('span');
                skillPercentage.classList.add('skill-percentage');
                skillPercentage.textContent = '0%';

                skillItem.appendChild(skillName);
                skillItem.appendChild(skillBarContainer);
                skillItem.appendChild(skillPercentage);
                skillsContainer.appendChild(skillItem);

                const isMobile = window.innerWidth <= 991.98;
                gsap.set(skillBar, isMobile ? { width: "0%" } : { height: "0%" });

                ScrollTrigger.create({
                    trigger: skillItem,
                    start: "top 85%",
                    once: true,
                    onEnter: () => {
                        const level = parseFloat(skillBar.dataset.skillLevel) || 0;

                        gsap.to(skillBar, {
                            [isMobile ? "width" : "height"]: level + "%",
                            duration: 1.5,
                            ease: "power3.out"
                        });

                        gsap.to({ value: 0 }, {
                            value: level,
                            duration: 1.5,
                            ease: "power3.out",
                            onUpdate: function () {
                                skillPercentage.textContent = Math.round(this.targets()[0].value) + "%";
                            }
                        });
                    }
                });
            });
        }

        renderMySkills(mySkillsData);

        window.addEventListener('resize', () => {
            clearTimeout(window.resizeTimer);
            window.resizeTimer = setTimeout(() => {
                renderMySkills(mySkillsData);
                ScrollTrigger.refresh();
            }, 250);
        });

        // Pie Chart Scroll Based
        const pieChart = document.querySelector('.pie-chart');
        if (pieChart) {
            gsap.set(pieChart, { background: "conic-gradient(#333 0deg 0deg, #fff 0deg 0deg)" });

            ScrollTrigger.create({
                trigger: pieChart,
                start: "top 85%",
                once: true,
                onEnter: () => {
                    const designerPercent = 60;
                    const coderPercent = 40;
                    const designerAngle = (designerPercent / 100) * 360;
                    const coderAngle = (coderPercent / 100) * 360;

                    gsap.to(pieChart, {
                        background: `conic-gradient(#333 0deg ${designerAngle}deg, #fff ${designerAngle}deg 360deg)`,
                        duration: 2,
                        ease: "power2.out"
                    });
                }
            });
        }

        // Random Facts Scroll Based
        gsap.from("#random-facts .yoda-img, #random-facts .random-list li", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#random-facts",
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });

        // Navbar Background Scroll
        const header = document.getElementById("header");
        window.addEventListener("scroll", () => {
            header.classList.toggle("header-scrolled", window.scrollY > 50);
        });

        // Header Logo & Nav Entrance
        gsap.from("#logo img, .icon-nav", {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: "power2.out",
            delay: 0.2
        });

        gsap.from("#header", {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        // About Section Animasi
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

        // Link Intercept for Exit Animation
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href');
            if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
                link.addEventListener('click', function (e) {
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
});
