const add = document.querySelector(".add");


const todosList = []



function displayTodo(todo) {
    const todos = document.querySelector(".todos");
    const node = document.createElement('li');
    node.innerHTML = `
    <span>${todo.title}</span>`;

    todos.append(node);



}

function addTodo(title) {
    var todo = {
        title,
        checked: false,
        id: Date.now()
    }

    todosList.push(todo);
    localStorage.setItem('todos', JSON.stringify(todosList));
    displayTodo(todo)

}




function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

const todos = document.querySelector(".todos");
todos.addEventListener('click', todo => {
    checkTodo(todo);
})


add.addEventListener('click', () => {

    const input = document.querySelector("input");
    const title = input.value.trim();
    if (title !== '') {
        addTodo(title);
        input.value = '';
        input.focus();
    }
})

