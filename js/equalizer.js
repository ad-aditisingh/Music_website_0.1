/* =========================================
   UMAAG – SHARED EQUALIZER ANIMATION SCRIPT
   File: js/equalizer.js
   Used on: index, discovery, career, creation
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bars .bar");

  if (!bars.length) return;

  bars.forEach((bar) => {
    /* Random animation speed (smooth variation) */
    const duration = 700 + Math.random() * 1300; // 700ms – 2000ms

    /* Negative delay so animation feels already running */
    const delay = -Math.random() * duration;

    /* Subtle width variation */
    const scaleX = (0.85 + Math.random() * 0.4).toFixed(2);

    /* Slight opacity depth variation */
    const opacity = (0.7 + Math.random() * 0.3).toFixed(2);

    bar.style.animationDuration = `${duration}ms`;
    bar.style.animationDelay = `${delay}ms`;
    bar.style.transform = `scaleX(${scaleX})`;
    bar.style.opacity = opacity;
  });
});

