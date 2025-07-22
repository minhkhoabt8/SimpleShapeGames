const shapes = [
    { name: "tròn", className: "circle", color: "red" },
    { name: "vuông", className: "square", color: "blue" },
    { name: "chữ nhật", className: "rectangle", color: "green" },
    { name: "tam giác", className: "triangle", color: "orange" },
  ];
  
  const target = shapes[Math.floor(Math.random() * shapes.length)].name;
  document.getElementById("target-shape").textContent = target.toUpperCase();
  
  const container = document.getElementById("shapes-container");
  
  shapes.forEach((shape, index) => {
    const div = document.createElement("div");
    div.className = "shape-box";
  
    const shapeDiv = document.createElement("div");
    if (shape.name === "tam giác") {
      shapeDiv.classList.add("triangle");
      shapeDiv.style.borderBottomColor = shape.color;
    } else {
      shapeDiv.classList.add("shape", shape.className);
      shapeDiv.style.backgroundColor = shape.color;
    }
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = shape.name;
    checkbox.name = "shape";
  
    div.appendChild(shapeDiv);
    div.appendChild(checkbox);
    container.appendChild(div);
  });
  
  function checkAnswer() {
    const checkboxes = document.querySelectorAll('input[name="shape"]');
    let correct = true;
    let checkedCount = 0;
  
    checkboxes.forEach(cb => {
      if (cb.checked) {
        checkedCount++;
        if (cb.value !== target) correct = false;
      } else {
        if (cb.value === target) correct = false;
      }
    });
  
    if (checkedCount === 0) {
      alert("Bạn chưa chọn hình nào!");
    } else if (correct) {
      showPopup("🎉 Đúng rồi!", true);
    } else {
      showPopup("❌ Sai rồi!", false);
    }
}
  function showPopup(message, isCorrect) {
    const popup = document.getElementById("popup");
    const content = document.getElementById("popup-content");
    const messageBox = document.getElementById("popup-message");
  
    popup.style.display = "flex";
    messageBox.textContent = message;
  
    content.classList.remove("success", "error");
    content.classList.add(isCorrect ? "success" : "error");
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  