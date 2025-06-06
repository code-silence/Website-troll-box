const registerBtn = document.getElementById("registerBtn");
const container = document.querySelector(".container");

// Handle hover movement
registerBtn.addEventListener("mouseenter", () => {
  const name = document.getElementById("name").value;
  const id = document.getElementById("studentId").value;

  if (!name || !id) {
    moveButtonRandomly();
  }
});

function moveButtonRandomly() {
  const maxX = container.clientWidth - registerBtn.offsetWidth;
  const maxY = container.clientHeight - registerBtn.offsetHeight;

  const newLeft = Math.floor(Math.random() * maxX);
  const newTop = Math.floor(Math.random() * maxY);

  registerBtn.style.position = "absolute";
  registerBtn.style.left = `${newLeft}px`;
  registerBtn.style.top = `${newTop}px`;
}

// Register logic
registerBtn.addEventListener("click", () => {
  const studentId = document.getElementById("studentId").value;
  if (studentId) {
    localStorage.setItem("studentId", studentId);
    window.location.href = "login.html";
  } else {
    alert("Please enter a Student ID.");
  }
});
