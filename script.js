function addTask() {
  const input = document.getElementById("taskInput");
  const priority = document.getElementById("priority").value;
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please write a task!");
    return;
  }

  const todoList = document.getElementById("todoList");

  const li = document.createElement("li");
  li.className = priority.toLowerCase();
  li.innerHTML = `
    ${taskText} 
    <button onclick="markDone(this)">Done</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  todoList.appendChild(li);
  input.value = "";
}

  const li = btn.parentElement;
  li.classList.add("done");
  document.getElementById("doneList").appendChild(li);
  btn.remove();
}

function deleteTask(btn) {
  btn.parentElement.remove();
}