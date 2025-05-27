let currentContrastIndex = 0;
const contrastModes = ['', 'high-contrast', 'black-yellow'];

function changeContrastMode() {
  currentContrastIndex++;
  if (currentContrastIndex >= contrastModes.length) {
    currentContrastIndex = 0;
  }

  document.body.className = contrastModes[currentContrastIndex];
}

function showAccessibilityInfo(e) {
  e.preventDefault();
  const infoBlock = document.getElementById("accessibility-info");

  if (infoBlock.classList.contains("hidden")) {
    infoBlock.classList.remove("hidden");
  } else {
    infoBlock.classList.add("hidden");
  }
}

function increaseFontSize() {
  let currentFontSize = parseInt(window.getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (currentFontSize + 2) + 'px';
}

function decreaseFontSize() {
  let currentFontSize = parseInt(window.getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (currentFontSize - 2) + 'px';
}

function resetFontSize() {
  document.body.style.fontSize = '18px';
}
