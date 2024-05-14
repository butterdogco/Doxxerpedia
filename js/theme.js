var currentTheme = "light";
var root = document.querySelector(":root");

function theme(mode) {
  const b = document.body.style;

  if (mode === "dark") {
    currentTheme = "dark";
    root.style.setProperty('--background1', 'var(--backgrounddark1)');
    root.style.setProperty('--text1', 'var(--textdark1)');
  } else if (mode === "light") {
    currentTheme = "light";
    root.style.setProperty('--background1', 'var(--backgroundlight1)');
    root.style.setProperty('--text1', 'var(--textlight1)');
  }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // theme("dark");
}