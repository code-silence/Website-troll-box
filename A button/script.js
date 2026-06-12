const button = document.getElementById("trollBtn");
const message = document.getElementById("message");
const missCount = document.getElementById("missCount");
const rageBar = document.getElementById("rageBar");

let misses = 0;

const insults = [
    "Nice try.",
    "Not even close.",
    "My grandma clicks faster.",
    "Skill issue detected.",
    "The button is laughing at you.",
    "Bro is fighting for his life.",
    "You missed again.",
    "you only had one job.",
    "The button has evolved.",
    "This is painful to watch.",
    "Achievement Unlocked: Professional Misser."
];

function moveButton() {

    misses++;

    missCount.textContent = misses;

    const rage = Math.min(misses * 2, 100);
    rageBar.style.width = rage + "%";

    message.textContent =
        insults[Math.min(
            Math.floor(misses / 3),
            insults.length - 1
        )];

    // Play bruh sound
    const sound = new Audio("bruh.mp3");
    sound.volume = 0.7;
    sound.play();

    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    button.style.transform = "scale(1.15)";

    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 150);
    if (misses === 50) {

    // stop all movement
    button.style.display = "none";

    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
            background:#121212;
            color:white;
            font-family:Arial, sans-serif;
            padding:20px;
        ">
            <h1 style="font-size:40px;">
                World needs patient people like you ❤️
            </h1>
            <p style="font-size:20px; margin-top:20px;">
                You tried ${misses} times and still didn't give up.
            </p>
            <h3 style="margin-top:30px; color:#00d4ff;">
                Respect.
            </h3>

            <button onclick="location.reload()" style="
                margin-top:40px;
                padding:12px 24px;
                font-size:18px;
                border:none;
                border-radius:10px;
                cursor:pointer;
                background:#00d4ff;
                color:black;
                font-weight:bold;
            ">
                Play Again
            </button>
        </div>
    `;

    return;
}
}

// Desktop support
button.addEventListener("mouseover", moveButton);

// Mobile support
button.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

// Mobile proximity dodge (extra evil)
document.addEventListener("touchmove", (e) => {

    const touch = e.touches[0];

    const rect = button.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.hypot(
        touch.clientX - centerX,
        touch.clientY - centerY
    );

    if (distance < 100) {
        moveButton();
    }

});

// Button becomes self-aware after 20 misses
setInterval(() => {

    if (misses > 20) {

        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;

        button.style.left = `${Math.random() * maxX}px`;
        button.style.top = `${Math.random() * maxY}px`;

    }

}, 3000);

// If user somehow wins
button.addEventListener("click", () => {

    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
            background:#121212;
            color:white;
            font-family:Arial,sans-serif;
        ">
            <h1>😳 IMPOSSIBLE!</h1>
            <h2>You actually clicked it.</h2>
            <p>After ${misses} failed attempts.</p>
            <h3>You won absolutely nothing.</h3>
            <button onclick="location.reload()" style="
                padding:12px 24px;
                font-size:18px;
                border:none;
                border-radius:10px;
                cursor:pointer;
            ">
                Torture Me Again
            </button>
        </div>
    `;

});