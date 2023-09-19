document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addButton");
  const deleteButton = document.getElementById("deleteButton");
  const backButton = document.getElementById("backButton");
  const input = document.querySelector(".bar input[type=text]");
  const taskList = document.querySelector(".list-group");

  let tasks = []
  let searchedTasks = []
  const cleanInput = () => {
    input.value = ''
  }

  const addTask = (task) => {
    if(task) {
      tasks.push(task.trim())
      cleanInput()
    }
  }

  const deleteTask = (taskToDelete) => {
    tasks = tasks.filter(task => taskToDelete !== task)
  }

  const printTasks = (tasks) => {
    const content = `${tasks.map((task) => `<li class="list-group-item">
      ${task} <button value="${task}" style="float: right;">Eliminar</button>
    </li>`)}`
    taskList.innerHTML = content
  }

  const searchTask = (taskToSearch) => {
    searchedTasks = tasks.filter(task => taskToSearch.trim().toLowerCase() === task.toLowerCase())
    cleanInput()
  }
  
  deleteButton.onclick = (task) => {
    deleteTask(task)
    printTasks(tasks)
  }
  // Add Button
  addButton.onclick = () => {
    addTask(input.value)
    printTasks(tasks)
  };

  searchButton.onclick = () => {
    searchTask(input.value)
    printTasks(searchedTasks)
  }

  backButton.onclick = () => {
    printTasks(tasks)
  }
  

  // // Check
  // var list = document.querySelector('ul');
  // list.addEventListener('click', function(ev) {
  //   if (ev.target.tagName === 'LI') {
  //     ev.target.classList.toggle('checked');
  //   }
  // }, false);

  // // Add Button
  // addButton.onclick = () => {
  //   const taskText = input.value;
  //   if (taskText) {
  //       const newItem = document.createElement("li");
  //       newItem.className = "list-group-item";
  //       newItem.textContent = taskText;
  //       taskList.appendChild(newItem);
  //       input.value = "";
  //   }
  // };
  
  // // Delete Button
  // deleteButton.onclick = () => {
  //   const selectedItems = document.querySelectorAll('.list-group-item.checked');
  //   selectedItems.forEach(function (item) {
  //     item.remove();
  //   });
  // };

  // // Search Button
  // searchButton.onclick = () => {
  //   const searchInput = input.value.trim();
  //   const listItems = document.querySelectorAll('.list-group-item');
  //   if(searchInput) {
  //     listItems.forEach(function (item) {
  //       const itemValue = item.textContent;
  //       if (itemValue.toLowerCase() === searchInput.toLowerCase()) {
  //         item.style.display = "block";
  //       } else {
  //         item.style.display= "none";
  //       }
  //     });
  //   }
  // };

  // Back Button 
  // backButton.onclick = () => {
  //   const listItems = document.querySelectorAll('.list-group-item');
  //   input.value = ""
  //   listItems.forEach(function (item){
  //     item.style.display = "block";
  //   }
  // )};
});