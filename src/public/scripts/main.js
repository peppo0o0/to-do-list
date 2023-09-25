document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addButton");
    const backButton = document.getElementById("backButton");
    const input = document.querySelector(".bar input[type=text]");
    const taskList = document.querySelector(".list-group");
  
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    let searchedTasks = []
  
    const generateDeleteButton = (task) => {
      const button = document.createElement('button')
      button.innerText = 'Eliminar'
      button.addEventListener('click', function () {
        deleteTask(task)
      })
      button.style = 'float: right'
      return button
    }
  
    const generateLi = (task) => {
      const li = document.createElement('li')
      li.innerText = task.value
      li.className = 'list-group-item'
      li.appendChild(generateDeleteButton(task))
      return li
     }
  
    const printTasks = (tasks) => {
      taskList.innerHTML = ''
      tasks.forEach((task) => taskList.appendChild(generateLi(task)))
    }
  
    printTasks(tasks)
   
    const cleanInput = () => {
      input.value = ''
    }
  
    const addTask = (task) => {
      if(task) {
        tasks.push({ value: task.trim(), id: crypto.randomUUID() })
        localStorage.setItem('tasks', JSON.stringify(tasks))
        cleanInput()
      }
    }
  
    const deleteTask = (taskToDelete) => {
      tasks = tasks.filter(task => taskToDelete.id !== task.id)
      printTasks(tasks)
    }
    
    const searchTask = (taskToSearch) => {
      searchedTasks = tasks.filter(task => taskToSearch.trim().toLowerCase() === task.value.toLowerCase())
      cleanInput()
    }
    
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
  });