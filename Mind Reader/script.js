const loadingBox = document.getElementById('loadingBox');
const loadingText = document.getElementById('loadingText');
const resultBox = document.getElementById('resultBox');
const barFill = document.getElementById('barFill');

const messages = [
  'Scanning your thoughts...',
  'Analyzing mental patterns...',
  'Diving deep into your mind...',
  'Almost there...',
  'Processing psychic signals...'
];

const messageDurations = [
  3000, // 3s
  4000,
  5000,
  3500,
  4500
];

function startMindReading() {
  const userInput = document.getElementById('userNumber').value;

  if (!userInput) {
    alert("Bro, gimme a number to read 😅");
    return;
  }

  // Reset visuals
  resultBox.style.display = 'none';
  loadingBox.style.display = 'block';
  barFill.style.width = '0%';
  loadingText.textContent = 'Establishing brainwave connection...';

  let current = 0;
  let totalTime = 0;

  function showNextMessage() {
    if (current < messages.length) {
      const duration = messageDurations[current];
      loadingText.textContent = messages[current];

      // Animate progress bar
      const percentage = ((current + 1) / messages.length) * 100;
      barFill.style.width = percentage + "%";

      totalTime += duration;

      setTimeout(() => {
        current++;
        showNextMessage();
      }, duration);
    } else {
      // Finished
      loadingBox.style.display = 'none';
      resultBox.style.display = 'block';
      resultBox.innerHTML = `<h2> I read your mind! :^)</h2><p>You were thinking of number <strong>${userInput}</strong></p>`;
    }
  }

  showNextMessage();
}
