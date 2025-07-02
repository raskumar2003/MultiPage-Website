function addTodo() {
  const input = document.getElementById('todoInput');
  const task = input.value.trim();
  if (task === '') {
    alert('Please enter a task!');
    return;
  }
  const li = document.createElement('li');
  li.textContent = task;
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
  document.getElementById('todoList').appendChild(li);
  input.value = '';
}