function theme(mode) {
  var selColor = "light";
  const b = document.body.style;

  if (mode === "dark") {
    selColor = "dark";
  } else if (mode === "light") {
    selColor = "light";
  }
  const darkBG = "rgb(20,20,50)";
  const dark1 = "rgb(60,60,100)";
  const dark2 = "rgb(70,70,110)";
  const darkText = "rgb(255,255,255)";
  
  b.color = darkText;
  b.backgroundColor = darkBG;
  // document.getElementById('item').style.backgroundColor = dark1;
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // theme("dark");
}