// Asignacion de los elementos HTML a variables JS
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addButton");
  const deleteButton = document.getElementById("deleteButton");
  const input = document.querySelector(".bar input[type=text]");
  const taskList = document.querySelector(".list-group");

  // Seleccion de filas
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

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
  
  // Botón Delete
  deleteButton.onclick = () => {
    const selectedItems = document.querySelectorAll('.list-group-item.checked');
    selectedItems.forEach(function (item) {
      item.remove();
    });
  };

});