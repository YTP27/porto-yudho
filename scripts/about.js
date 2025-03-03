document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
    const gridToggle = document.querySelector(".grid");
    const langToggle = document.getElementById("lang-toggle");
  
    // Toggle theme
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-theme");
      body.classList.toggle("dark-theme");
      themeToggle.textContent = body.classList.contains("light-theme") ? "🌙" : "☀️";
    });
  
    // Toggle grid
    gridToggle.addEventListener("click", () => {
      body.classList.toggle("show-grid");
    });
  
    // Toggle language
    langToggle.addEventListener("click", () => {
      const isEnglish = langToggle.textContent === "EN";
      langToggle.textContent = isEnglish ? "ID" : "EN";
  
      // Toggle visibility of elements based on language
      document.querySelectorAll("[data-lang]").forEach(element => {
        if (element.getAttribute("data-lang") === (isEnglish ? "id" : "en")) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    });
  });