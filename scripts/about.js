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
            });

            ScrollTrigger.getAll().forEach(trigger => trigger.kill());

            gsap.utils.toArray(".skill-item").forEach(skillItem => {
                const skillBar = skillItem.querySelector(".skill-bar");
                const skillPercentageElement = skillItem.querySelector(".skill-percentage");

                const skillLevel = parseFloat(skillBar.dataset.skillLevel) || 0;
                const isMobile = window.innerWidth <= 991.98;

                gsap.set(skillBar, isMobile ? { width: "0%" } : { height: "0%" });

                gsap.to(skillBar, {
                    [isMobile ? "width" : "height"]: skillLevel + "%",
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: skillItem,
                        start: "top 85%",
                        toggleActions: "play none none none",
                        once: true
                    }
                });

                gsap.to({ value: 0 }, {
                    value: skillLevel,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: skillItem,
                        start: "top 85%",
                        toggleActions: "play none none none",
                        once: true
                    },
                    onUpdate: function () {
                        skillPercentageElement.innerText = Math.round(this.targets()[0].value) + "%";
                    }
                });
            });
        }

        renderMySkills(mySkillsData);

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                renderMySkills(mySkillsData);
                ScrollTrigger.refresh();
            }, 250);
        });

        // Pie Chart Animasi Designer vs Coder (60% Designer, 40% Coder contoh)
        const pieChart = document.querySelector('.pie-chart');
        if (pieChart) {
            const totalAngle = 360;
            const designerPercent = 60;
            const coderPercent = 40;

            const designerAngle = (designerPercent / 100) * totalAngle;
            const coderAngle = (coderPercent / 100) * totalAngle;

            gsap.set(pieChart, { background: "conic-gradient(#3498db 0deg 0deg, #333 0deg 0deg)" });

            gsap.to(pieChart, {
                background: `conic-gradient(#3498db 0deg ${designerAngle}deg, #2ecc71 ${designerAngle}deg ${totalAngle}deg)`,
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

        // Animasi Random Facts
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

        // Navbar background muncul saat scroll
        const header = document.getElementById("header");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        });
    }
});
