const loginBtn = document.getElementById("loginBtn");
const container = document.querySelector(".container");

// Handle hover movement
loginBtn.addEventListener("mouseenter", () => {
  const name = document.getElementById("name").value;
  const id = document.getElementById("studentId").value;

  if (!name || !id) {
    moveButtonRandomly();
  }
});

function moveButtonRandomly() {
  const maxX = container.clientWidth - loginBtn.offsetWidth;
  const maxY = container.clientHeight - loginBtn.offsetHeight;

  const newLeft = Math.floor(Math.random() * maxX);
  const newTop = Math.floor(Math.random() * maxY);

  loginBtn.style.position = "absolute";
  loginBtn.style.left = `${newLeft}px`;
  loginBtn.style.top = `${newTop}px`;
}

// Login logic
loginBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const studentId = document.getElementById("studentId").value;
  if (name && studentId) {
    // Redirect directly to Rickroll YouTube video
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else {
    alert("Please fill in both Name and Student ID.");
  }
});

