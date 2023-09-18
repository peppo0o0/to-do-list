document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addButton");
  const deleteButton = document.getElementById("deleteButton");
  const input = document.querySelector(".bar input[type=text]");
  const taskList = document.querySelector(".list-group");

  // Check
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  // Add Button
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
  
  // Delete Button
  deleteButton.onclick = () => {
    const selectedItems = document.querySelectorAll('.list-group-item.checked');
    selectedItems.forEach(function (item) {
      item.remove();
    });
  };

  // Search Button
  searchButton.onclick = () => {
    const searchInput = input.value;
    const listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach(function (item) {
      const itemValue = item.textContent;
      if (itemValue.includes(searchInput)) {
        item.style.display = "block";
      } else {
        item.style.display= "none";
      }
    });
  };

});