// Asignacion de los elementos HTML a variables JS
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addButton");
  const deleteButton = document.getElementById("deleteButton");
  const input = document.querySelector(".bar input[type=text]");
  const taskList = document.querySelector(".list-group");

  // Boton Add
  addButton.onclick = () => {
      const taskText = input.value;
      if (taskText !== "") {
          const newItem = document.createElement("li");
          newItem.className = "list-group-item";
          newItem.textContent = taskText;
          taskList.appendChild(newItem);
          input.value = "";
      }
  };

});