    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menuList");

if (track && prevBtn && nextBtn) {
  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
  });
}

toggle.addEventListener("click", () => {
  menu.classList.toggle("open");

  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", !expanded);
  toggle.textContent = menu.classList.contains("open") ? "✕" : "☰";
});