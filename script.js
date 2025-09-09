// Popup
const joinBtn = document.getElementById('joinBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const step1 = document.getElementById('step1');

joinBtn.addEventListener('click', () => popup.style.display = 'block');
step1.addEventListener('click', () => popup.style.display = 'block');
closePopup.addEventListener('click', () => popup.style.display = 'none');

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Countdown
const countdownEl = document.getElementById('countdown');
const targetDate = new Date('December 30, 2025 20:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownEl.innerHTML = "Przygoda się rozpoczęła!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

setInterval(updateCountdown, 1000);
