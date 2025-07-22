
let selectedColor = null;

document.querySelectorAll('.color-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedColor = btn.dataset.color;
  });
});

document.querySelectorAll('.shape').forEach(shape => {
  shape.addEventListener('click', () => {
    if (!selectedColor) return;
    if (shape.classList.contains('triangle')) {
      shape.style.borderBottomColor = selectedColor;
    } else {
      shape.style.background = selectedColor;
    }
  });
});
