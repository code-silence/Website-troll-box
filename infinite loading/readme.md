# Infinite Loading System (Troll UI Project)

A simple web-based fake system loader that simulates an endless loading process with a progress bar, logs, and status updates.

Built using HTML, CSS, and JavaScript.

---

## Project Structure

/infinite-loader
 ├── index.html
 ├── style.css
 ├── script.js
 └── README.md

---

## How It Works

### 1. UI (index.html)

The HTML file creates the main layout:

- Progress bar
- Log window
- Status text
- Start and Reset buttons

These elements are later controlled using JavaScript.

---

### 2. Styling (style.css)

The UI is designed with a dark theme and centered layout.

Key features:
- Dark background
- Card-based layout
- Smooth progress bar animation
- Scrollable log section

Example:
```css
.progress {
    width: 0%;
    transition: width 0.2s ease;
}

3. Logic (script.js)

Start Loading

When the user clicks Start:

Prevents multiple runs
Starts a repeating interval
if (running) return;

interval = setInterval(() => {
Progress System

Progress increases randomly:

percent += Math.random() * 2.5;
progress.style.width = percent + "%";

It stops at 99% to simulate an infinite loading effect.

Logging System

Logs appear based on progress milestones:

addLog("Boot sequence initiated...");

Each log is added to the log box and auto-scrolls to the bottom.

Reset System

Reset button:

Stops the interval
Resets progress
Clears logs
clearInterval(interval);
progress.style.width = "0%";