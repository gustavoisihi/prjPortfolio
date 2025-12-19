    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const menuToggle = document.getElementById("menuToggle");
    const navList = document.querySelector("#mainNav ul");

if (track && prevBtn && nextBtn) {
  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
  });
}

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("open");
});