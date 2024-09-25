const slide = document.querySelector('.carousel-slide');
const items = document.querySelectorAll('.carousel-item');
let counter = 0;

function updateSize() {
  return items[0].clientWidth; // Dapatkan lebar item berdasarkan ukuran saat ini
}

document.getElementById('nextBtn').addEventListener('click', () => {
  const size = updateSize(); // Ambil ukuran terbaru
  if (counter >= items.length - 1) return;
  slide.style.transform = `translateX(${-size * ++counter}px)`;
});

document.getElementById('prevBtn').addEventListener('click', () => {
  const size = updateSize(); // Ambil ukuran terbaru
  if (counter <= 0) return;
  slide.style.transform = `translateX(${-size * --counter}px)`;
});

// Tambahkan event listener untuk resize window
window.addEventListener('resize', () => {
  const size = updateSize(); // Perbarui ukuran saat resize
  slide.style.transform = `translateX(${-size * counter}px)`; // Sesuaikan posisi
});
