document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.querySelector('.theme-toggle');
  const gridToggle = document.querySelector('.grid');
  const languageSwitch = document.getElementById('language-switch');
  const body = document.body;

  // Teks untuk bahasa Inggris dan Indonesia
  const translations = {
    en: {
      heroTitle: "HEY, I'M <span class='highlight'>YUDHO TRI PUTRANTO</span>",
      heroSubtitle: "BUT YOU CAN CALL ME <span class='highlight'>YUDHO</span>",
      heroDescription: "I'm a UI/UX designer, QA Engineer, and calisthenics coach",
      linkProjects: "→ See My Projects",
      linkAbout: "→ About Me",
      languageSwitchText: "EN",
    },
    id: {
      heroTitle: "HAI, SAYA <span class='highlight'>YUDHO TRI PUTRANTO</span>",
      heroSubtitle: "TAPI ANDA BISA PANGGIL SAYA <span class='highlight'>YUDHO</span>",
      heroDescription: "Saya seorang desainer UI/UX, QA Engineer, dan pelatih calisthenics",
      linkProjects: "→ Lihat Proyek Saya",
      linkAbout: "→ Tentang Saya",
      languageSwitchText: "ID",
    }
  };

  // Set bahasa default (English)
  let currentLanguage = 'en';
  
  // Fungsi untuk mengubah teks halaman
  function changeLanguage(language) {
    document.querySelector('.hero h1').innerHTML = translations[language].heroTitle;
    document.querySelector('.hero h2').innerHTML = translations[language].heroSubtitle;
    document.querySelector('.hero p').textContent = translations[language].heroDescription;
    document.querySelector('.links a[href="projects.html"]').textContent = translations[language].linkProjects;
    document.querySelector('.links a[href="about.html"]').textContent = translations[language].linkAbout;
    languageSwitch.textContent = translations[language].languageSwitchText;
  }

  // Toggle theme
  themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-theme');
      body.classList.toggle('dark-theme');
  });

  // Toggle grid overlay
  gridToggle.addEventListener('click', () => {
      body.classList.toggle('show-grid');
  });

  // Event listener untuk mengubah bahasa saat tombol di-click
  languageSwitch.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'id' : 'en'; // Toggle bahasa
    changeLanguage(currentLanguage); // Ubah bahasa
  });

  // Inisialisasi dengan bahasa default
  changeLanguage(currentLanguage);
});
