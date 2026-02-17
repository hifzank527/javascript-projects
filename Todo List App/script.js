const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById("todoList");
const addTodo = document.getElementById("addTodo");
const clear = document.getElementById("clear")

let todoArray = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(todoArray))
}

function addTodos() {
    todoText = todoInput.value.trim();
    if (!todoText) return;
    todoArray.push(todoText);
    todoInput.value = ""
    saveTasks()
    renderTodos()
}

function renderTodos() {
    todoList.innerHTML = ""
    todoArray.forEach((element, index) => {
        let li = document.createElement("li");

        let span = document.createElement("span")
        span.textContent = element;

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.addEventListener("change", () => {
            span.classList.toggle("done")
        })

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "X"
        removeBtn.classList.add("removeBtn");
        removeBtn.addEventListener("click", () => {
            todoArray.splice(index, 1)
            saveTasks();
            renderTodos();
        });

        li.appendChild(checkBox);
        li.appendChild(span);
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    });
}

renderTodos()

addTodo.addEventListener("click", addTodos)

todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodos()
    }
})