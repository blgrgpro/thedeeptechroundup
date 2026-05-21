// Source filter
const filterBtns = document.querySelectorAll('.filter-btn');
const cards      = document.querySelectorAll('.news-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.source === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Duplicate ticker content so it loops seamlessly
const track = document.querySelector('.ticker-track');
if (track) {
  track.innerHTML += track.innerHTML;
}
