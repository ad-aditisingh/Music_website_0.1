// main.js — equalizer randomizer (shared)
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bars .bar");
  bars.forEach((bar) => {
    // duration between 650ms and 2000ms
    const duration = Math.floor(650 + Math.random() * 1350);
    const delay = -Math.floor(Math.random() * duration); // negative so animation appears mid-cycle
    const scaleX = (0.85 + Math.random() * 0.4).toFixed(2);
    const opacity = (0.65 + Math.random() * 0.35).toFixed(2);

    bar.style.animationDuration = duration + "ms";
    bar.style.animationDelay = delay + "ms";
    bar.style.transform = `scaleX(${scaleX})`;
    bar.style.opacity = opacity;
  });
});
