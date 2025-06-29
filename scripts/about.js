document.addEventListener('DOMContentLoaded', function () {
    // ... (Kode yang tidak berubah di bagian atas) ...

    // =============================
    // NEW ANIMATIONS FOR about.html
    // =============================
    if (window.location.pathname.endsWith('about.html')) {
        gsap.registerPlugin(ScrollTrigger);

        // ... (About Section Entrance Animation dan Designer/Coder Pie Chart Animation - tidak berubah) ...

        // =============================
        // START - KODE SKILL SECTION DENGAN REVISI NaN%
        // =============================

        // 1. Data Skill Hardcoded (Dengan colorClass)
        const mySkillsData = [
            { name: "UI/UX Design", percentage: 95, colorClass: "skill-blue" },
            { name: "Front-end Development", percentage: 90, colorClass: "skill-green" },
            { name: "QA Automation", percentage: 95, colorClass: "skill-yellow" },
            { name: "Prototyping & Wireframing", percentage: 75, colorClass: "skill-orange" },
            { name: "Problem Solving", percentage: 85, colorClass: "skill-purple" },
            { name: "Visual Storytelling", percentage: 80, colorClass: "skill-red" }
        ];

        // 2. Fungsi untuk Membuat dan Menampilkan Skill Bar Secara Dinamis
        function renderMySkills(skills) {
            const skillsContainer = document.querySelector('.skills-grid');
            if (!skillsContainer) {
                console.error("Error: Elemen kontainer skill dengan class '.skills-grid' tidak ditemukan di HTML.");
                return;
            }
            skillsContainer.innerHTML = ''; // Bersihkan konten yang sudah ada

            skills.forEach(skill => {
                const skillItem = document.createElement('div');
                skillItem.classList.add('skill-item');

                const skillName = document.createElement('div');
                skillName.classList.add('skill-name');
                skillName.textContent = skill.name;
                skillItem.appendChild(skillName);

                const skillBarContainer = document.createElement('div');
                skillBarContainer.classList.add('skill-bar-container');
                skillItem.appendChild(skillBarContainer);

                const skillBar = document.createElement('div');
                skillBar.classList.add('skill-bar');
                if (skill.colorClass) {
                    skillBar.classList.add(skill.colorClass);
                }
                skillBar.dataset.skillLevel = skill.percentage;
                skillBar.style.height = '0%'; // Tinggi awal untuk animasi
                skillBarContainer.appendChild(skillBar);

                const skillPercentage = document.createElement('span');
                skillPercentage.classList.add('skill-percentage');
                skillPercentage.textContent = '0%'; // Teks awal untuk animasi
                skillItem.appendChild(skillPercentage);

                skillsContainer.appendChild(skillItem);
            });

            // 3. Terapkan animasi GSAP setelah elemen dibuat dan ditambahkan ke DOM
            gsap.utils.toArray(".skill-item").forEach((skillItem) => {
                const skillBar = skillItem.querySelector(".skill-bar");
                const skillPercentageElement = skillItem.querySelector(".skill-percentage");
                
                if (!skillBar || !skillPercentageElement) {
                    console.warn("Could not find skillBar or skillPercentageElement for a skillItem. Skipping animation for this item.");
                    return;
                }

                let skillLevel = parseFloat(skillBar.dataset.skillLevel);

                if (isNaN(skillLevel)) {
                    console.warn(`Peringatan: skillLevel tidak valid (${skillBar.dataset.skillLevel}) untuk skill: ${skillItem.querySelector('.skill-name')?.textContent || 'Tidak diketahui'}. Menggunakan 0%.`);
                    skillLevel = 0;
                }

                // Animasi untuk bar progress (tinggi)
                gsap.to(skillBar, {
                    height: skillLevel + "%",
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: skillItem,
                        start: "top 85%",
                        toggleActions: "play none none none",
                        once: true
                    }
                });

                // Animasi untuk angka persentase (menghitung naik)
                // Coba ubah target dari skillPercentageElement langsung ke objek polos
                // agar properti 'value' tidak berpotensi konflik dengan DOM
                gsap.to({ value: 0 }, { // Animasi objek polos dari 0
                    value: skillLevel, // Menuju skillLevel
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: skillItem,
                        start: "top 85%",
                        toggleActions: "play none none none",
                        once: true
                    },
                    onUpdate: function() {
                        // `this.targets()[0]` sekarang mengacu pada objek polos { value: ... }
                        // Jadi, kita langsung ambil nilainya
                        skillPercentageElement.innerText = Math.round(this.targets()[0].value) + "%";
                    }
                });
            });
        }

        // 4. Panggil fungsi renderMySkills saat halaman about.html dimuat
        renderMySkills(mySkillsData);

        // =============================
        // END - KODE SKILL SECTION DENGAN REVISI NaN%
        // =============================

        // Random Facts Section Animation
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
});