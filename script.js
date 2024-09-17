// Countdown Timer Script
const countdownElement = document.getElementById('countdown');
const endDate = new Date('2024-10-01T00:00:00'); // Set your end date here

function updateCountdown() {
  const now = new Date();
  const timeLeft = endDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    countdownElement.text
