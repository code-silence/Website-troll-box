const progress = document.getElementById("progress");
const statusText = document.getElementById("statusText");
const logBox = document.getElementById("logBox");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let percent = 0;
let running = false;
let interval;

const logs = [
    "Boot sequence initiated...",
    "Loading kernel modules...",
    "Checking system integrity...",
    "Allocating memory blocks...",
    "Connecting to virtual network...",
    "Optimizing UI components...",
    "Final checks in progress..."
];

function addLog(text) {
    const line = document.createElement("div");
    line.textContent = "> " + text;
    logBox.appendChild(line);
    logBox.scrollTop = logBox.scrollHeight;
}

function startLoading() {
    if (running) return;

    running = true;
    percent = 0;
    logBox.innerHTML = "";
    statusText.innerText = "Starting...";
    startBtn.disabled = true;

    let logIndex = 0;

    interval = setInterval(() => {

        if (percent < 99) {
            percent += Math.random() * 2.5;
            progress.style.width = percent + "%";

            if (logIndex < logs.length && percent > (logIndex + 1) * 12) {
                addLog(logs[logIndex]);
                statusText.innerText = logs[logIndex];
                logIndex++;
            }
        } 
        else {
            percent = 99;
            progress.style.width = "99%";
            statusText.innerText = "Waiting for final confirmation...";
            addLog("System waiting for external approval...");
        }

    }, 250);
}

function resetAll() {
    clearInterval(interval);
    running = false;
    percent = 0;
    progress.style.width = "0%";
    logBox.innerHTML = "";
    statusText.innerText = "Idle";
    startBtn.disabled = false;
}

startBtn.addEventListener("click", startLoading);
resetBtn.addEventListener("click", resetAll);