const petalLayer = document.getElementById("petalLayer");
const symbols = [
  { text: "♥", type: "heart" },
  { text: "🌸", type: "flower" },
  { text: "✿", type: "flower" },
  { text: "💕", type: "heart" }
];

function createPetal() {
  if (!petalLayer) return;
  const item = symbols[Math.floor(Math.random() * symbols.length)];
  const el = document.createElement("span");
  el.className = `petal ${item.type}`;
  el.textContent = item.text;
  el.style.left = `${Math.random() * 100}vw`;
  el.style.fontSize = `${14 + Math.random() * 18}px`;
  const duration = 7 + Math.random() * 8;
  el.style.animationDuration = `${duration}s`;
  petalLayer.appendChild(el);
  window.setTimeout(() => el.remove(), duration * 1000);
}

// Keep the gentle falling-flower effect lightweight.
for (let i = 0; i < 10; i++) {
  window.setTimeout(createPetal, i * 350);
}
window.setInterval(createPetal, 850);

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle?.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const responseBox = document.getElementById("responseBox");
document.querySelectorAll(".answer").forEach(button => {
  button.addEventListener("click", () => {
    responseBox.textContent = button.dataset.message || "Nisar ❤️ Suhana";
    responseBox.classList.add("show");
    // A small celebratory burst, without blocking the chosen answer.
    for (let i = 0; i < 8; i++) {
      window.setTimeout(createPetal, i * 90);
    }
  });
});
