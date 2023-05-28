// Retrieve the todo list from local storage
const todoList = JSON.parse(localStorage.getItem("todo")) || [];

// Display the todo list on page load
displayTodo();

function displayTodo() {
  const listElement = document.querySelector('.list');
  let todoListHTML = '';

  // Generate HTML for each todo item
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    let name = todo.name;
    let date = todo.date;

    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <input type="checkbox" id="myCheckbox" onclick="checkboxClicked(${i})">
    `;
    todoListHTML += html;
  }

  // Update the list element with the generated HTML
  listElement.innerHTML = todoListHTML;
  // Save the updated todo list to local storage
  localStorage.setItem('todo', JSON.stringify(todoList));
}

function addTodo() {
  const todoElement = document.querySelector('.js-input');
  let name = todoElement.value;

  const dateElement = document.querySelector('.js-date-input');
  let date = dateElement.value;

  // Add the new todo to the list
  todoList.push({
    name: name,
    date: date
  });

  // Clear the input fields
  todoElement.value = '';
  dateElement.value = '';

  // Update the displayed todo list
  displayTodo();
}

function deleteTodo(index) {
  // Remove the todo item from the list
  todoList.splice(index, 1);

  // Update the displayed todo list
  displayTodo();
}

function enterKey(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}

function checkboxClicked(i) {
  const checkbox = document.getElementById('myCheckbox');
  
  if (checkbox.checked) {
    deleteTodo(i);
  }
}
