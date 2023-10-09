const listTask = document.querySelector(".list-group");
const btnCreate = document.getElementById("btn-create");
const btnSearch = document.getElementById("btn-search");
const btnBack = document.getElementById("btn-back");
const input = document.querySelector("input[type=text]");
const apiUrl = 'http://localhost:3000/api/task'

// Task checker 
listTask.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Creating task with their delete button 
async function createTaskLi(post){
  const li = document.createElement('li')
  li.innerText = post.task
  const button = document.createElement('button')
  button.innerText = 'X'
  button.className = 'delete-button'

  // Delete Button
  button.addEventListener('click', async () => {
    await delTasks(post.id)
    await getTasks()
  })

  li.appendChild(button)
  listTask.appendChild(li);
}

// Fetch API (GET)
async function getTasks() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    listTask.innerHTML = ''
    data.forEach(post => {
      createTaskLi(post)
    })
};
getTasks();

// Fetch API (POST)
async function createTask(newTask) {
  if(newTask) {
    await fetch(apiUrl,{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ task: newTask })
    });
  }
}

// Add Button
btnCreate.addEventListener('click', async () => {
  const input = document.querySelector('input[name="task"]')
  await createTask(input.value)
  await getTasks()
})

// Fetch API (DELETE)
async function delTasks(id) {
  const response = await fetch(`${apiUrl}/${id}`,{
    method: 'DELETE'
  });
};

// Search Function
async function search(){
  const searchInput = input.value;
  const listItems = document.querySelectorAll('ul li');
  listItems.forEach(function (item) {
    const itemValue = item.textContent;
    if (itemValue.toLowerCase().includes(searchInput.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display= "none";
    }
  });
}

// Search Button
btnSearch.addEventListener('click', async () => {
  await search()
});

// Back Function
async function back(){
  const listItems = document.querySelectorAll('ul li');
  listItems.forEach(function (item){
    item.style.display = "block";
    input.value = "";
  });
};

// Back Button
btnBack.addEventListener('click', async () => {
  await back();
});