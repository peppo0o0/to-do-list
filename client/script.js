const listTask = document.querySelector("ul");
const btnPost = document.getElementById("btnPost");
const btnDel = document.getElementById("btnDel");
const btnPut = document.getElementById("btnPut")
const newTask = {
  task : 'darle comida al gato'
};

// Function to clean list after pressing any button
function cleanList() {
  document.getElementsByClassName("list-group")[0].innerHTML = "";
}

// Fetch API (GET)
async function getTasks() {
    const response = await fetch('http://localhost:3000/api/task');
    const data = await response.json();
    data.forEach(post => {
      listTask.insertAdjacentHTML('beforeend', `<li>${post.task}</li>`);
    });
}
getTasks();

// Fetch API (POST)
async function postTasks() {
  const response = await fetch('http://localhost:3000/api/task',{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(newTask)
  });
  const data = await response.json();
  data.forEach(post => {
    listTask.insertAdjacentHTML('beforeend', `<li>${post.task}</li>`);
  });
}
btnPost.addEventListener("click", () => {
  postTasks();
  cleanList();
  getTasks();
});

// Fetch API (DELETE)
async function delTasks() {
  const response = await fetch('http://localhost:3000/api/task/84',{
    method: 'DELETE'
  });
  const data = await response.json();
  data.forEach(post => {
    listTask.insertAdjacentHTML('beforeend', `<li>${post.task}</li>`);
  });
}
btnDel.addEventListener("click", () => {
  delTasks();
  cleanList();
  getTasks();
});

// Fetch API (PUT)
async function putTasks() {
  const response = await fetch('http://localhost:3000/api/task/23',{
    method: 'PUT',
    headers:{
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(newTask)
  });
  const data = await response.json();
  data.forEach(post => {
    listTask.insertAdjacentHTML('beforeend', `<li>${post.task}</li>`);
  });
}
btnPut.addEventListener("click", () => {
  putTasks();
  cleanList();
  getTasks();
});