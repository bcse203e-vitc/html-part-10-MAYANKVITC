// Get references to the DOM elements
const addButton = document.getElementById('addButton');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Function to create a new to-do item
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === '') return; // Don't add an empty item

    // Create new <li> element
    const li = document.createElement('li');
    li.textContent = todoText;

    // Create Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn');

    // Add event listener to the Remove button
    removeBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    // Append the Remove button to the <li>
    li.appendChild(removeBtn);

    // Append the <li> to the <ul>
    todoList.appendChild(li);

    // Clear the input field after adding the item
    todoInput.value = '';
}

// Add event listener to the "Add" button
addButton.addEventListener('click', addTodo);

// Optional: Allow pressing "Enter" to add a to-do item
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
