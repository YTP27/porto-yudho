// Efek untuk mengubah posisi noise saat scroll
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    document.body.style.backgroundPosition = `center ${scrollPosition * 0.5}px`; // Ubah posisi noise
  });
  
  // Efek grain dinamis berdasarkan posisi mouse
  document.body.addEventListener('mousemove', function(event) {
    let x = event.clientX;
    let y = event.clientY;
    let intensity = (x + y) / 2; // Mengukur intensitas berdasarkan posisi mouse
    document.body.style.filter = `grayscale(${intensity / 1000})`; // Ubah tingkat grayscale
  });
  