
document.querySelectorAll('.shape').forEach(shape => {
  shape.addEventListener('dragstart', ev => {
    ev.dataTransfer.setData('text/plain', shape.dataset.shape);
  });
});

document.querySelectorAll('.target').forEach(target => {
  target.addEventListener('dragover', ev => ev.preventDefault());
  target.addEventListener('drop', ev => {
    ev.preventDefault();
    const droppedShape = ev.dataTransfer.getData('text/plain');
    if (droppedShape === target.dataset.accept) {
      target.style.background = 'lightgreen';
      target.textContent = '✔';
    } else {
      target.style.background = '#f88';
      target.textContent = '✘';
    }
  });
});
