const listTask = document.querySelector(".list-group");
const btnCreate = document.getElementById("btn-create");
const apiUrl = 'http://localhost:3000/api/task'

// Creating task with their delete button 
async function createTaskLi(post){
  const li = document.createElement('li')
  li.innerText = post.task
  const button = document.createElement('button')
  button.innerText = 'DELETE'
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

// FETCH API (POST)
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